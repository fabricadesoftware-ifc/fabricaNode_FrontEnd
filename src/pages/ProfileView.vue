<script setup lang="ts">
import { ref, computed } from 'vue';
import OrcidService from '@/services/orcid/orcid';
import OpenAlexService from '@/services/openalex/openalex';

interface ICandidato {
  id: string;
  nome: string;
  instituicoes: string[];
}

interface IObra {
  id: string;
  titulo: string;
  ano: number | string | null;
}

const orcidService = new OrcidService();
const openAlexService = new OpenAlexService();

const fontes = [
  { valor: 'orcid', nome: 'ORCID' },
  { valor: 'openalex', nome: 'OpenAlex' },
] as const;

const fonte = ref<'orcid' | 'openalex'>('orcid');

const nome = ref('');
const buscando = ref(false);
const candidatos = ref<ICandidato[]>([]);
const buscou = ref(false);

const candidatoConfirmado = ref<ICandidato | null>(null);
const obras = ref<IObra[]>([]);
const obrasSelecionadas = ref<Set<string>>(new Set());
const carregandoObras = ref(false);

const importando = ref(false);
const resultado = ref<number | null>(null);
const erro = ref('');

const nomeFonte = computed(() => fontes.find((f) => f.valor === fonte.value)?.nome ?? '');

function resetar() {
  erro.value = '';
  resultado.value = null;
  candidatoConfirmado.value = null;
  candidatos.value = [];
  buscou.value = false;
}

async function buscar() {
  erro.value = '';
  resultado.value = null;
  candidatoConfirmado.value = null;
  buscando.value = true;
  buscou.value = false;
  try {
    if (fonte.value === 'orcid') {
      const encontrados = await orcidService.buscarPorNome(nome.value);
      candidatos.value = encontrados.map((c) => ({ id: c.orcid_id, nome: c.nome, instituicoes: c.instituicoes }));
    } else {
      const encontrados = await openAlexService.buscarPorNome(nome.value);
      candidatos.value = encontrados.map((c) => ({ id: c.openalex_id, nome: c.nome, instituicoes: c.instituicoes }));
    }
  } catch {
    erro.value = `Não foi possível buscar no ${nomeFonte.value} agora.`;
  } finally {
    buscando.value = false;
    buscou.value = true;
  }
}

async function confirmarCandidato(candidato: ICandidato) {
  erro.value = '';
  candidatoConfirmado.value = candidato;
  obrasSelecionadas.value = new Set();
  carregandoObras.value = true;
  try {
    if (fonte.value === 'orcid') {
      const encontradas = await orcidService.listarObras(candidato.id);
      obras.value = encontradas.map((o) => ({ id: String(o.put_code), titulo: o.titulo, ano: o.ano }));
    } else {
      const encontradas = await openAlexService.listarObras(candidato.id);
      obras.value = encontradas.map((o) => ({ id: o.openalex_id, titulo: o.titulo, ano: o.ano }));
    }
  } catch {
    erro.value = `Não foi possível carregar as obras desse perfil ${nomeFonte.value}.`;
  } finally {
    carregandoObras.value = false;
  }
}

function alternarObra(id: string) {
  if (obrasSelecionadas.value.has(id)) {
    obrasSelecionadas.value.delete(id);
  } else {
    obrasSelecionadas.value.add(id);
  }
}

async function importar() {
  if (!candidatoConfirmado.value) return;
  erro.value = '';
  importando.value = true;
  try {
    const idsSelecionados = Array.from(obrasSelecionadas.value);
    const resposta =
      fonte.value === 'orcid'
        ? await orcidService.confirmar(candidatoConfirmado.value.id, idsSelecionados.map(Number))
        : await openAlexService.confirmar(candidatoConfirmado.value.id, idsSelecionados);
    resultado.value = resposta.publicacoes_importadas.length;
  } catch {
    erro.value = 'Não foi possível importar as publicações selecionadas.';
  } finally {
    importando.value = false;
  }
}
</script>

<template>
  <div class="profile-page">
    <h1>Vincular perfil acadêmico</h1>
    <p class="subtitle">Encontre seu perfil e importe suas publicações.</p>

    <div class="fonte-tabs">
      <button
        v-for="f in fontes"
        :key="f.valor"
        type="button"
        class="tab"
        :class="{ ativo: fonte === f.valor }"
        @click="fonte = f.valor; resetar()"
      >
        {{ f.nome }}
      </button>
    </div>

    <form class="search-form" @submit.prevent="buscar">
      <input v-model="nome" type="text" placeholder="Seu nome completo" required />
      <button type="submit" :disabled="buscando">{{ buscando ? 'Buscando...' : 'Buscar' }}</button>
    </form>

    <p v-if="erro" class="error">{{ erro }}</p>

    <section v-if="!candidatoConfirmado && buscou">
      <p v-if="candidatos.length === 0">Nenhum perfil encontrado com esse nome.</p>
      <ul v-else class="candidatos">
        <li v-for="candidato in candidatos" :key="candidato.id">
          <div>
            <strong>{{ candidato.nome }}</strong>
            <span class="fonte-id">{{ candidato.id }}</span>
            <p v-if="candidato.instituicoes.length" class="instituicoes">
              {{ candidato.instituicoes.join(', ') }}
            </p>
          </div>
          <button @click="confirmarCandidato(candidato)">Este sou eu</button>
        </li>
      </ul>
    </section>

    <section v-if="candidatoConfirmado">
      <h2>Obras de {{ candidatoConfirmado.nome }}</h2>
      <p v-if="carregandoObras">Carregando obras...</p>
      <p v-else-if="obras.length === 0">Nenhuma obra pública encontrada nesse perfil.</p>
      <ul v-else class="obras">
        <li v-for="obra in obras" :key="obra.id">
          <label>
            <input
              type="checkbox"
              :checked="obrasSelecionadas.has(obra.id)"
              @change="alternarObra(obra.id)"
            />
            {{ obra.titulo }} <span v-if="obra.ano">({{ obra.ano }})</span>
          </label>
        </li>
      </ul>
      <button v-if="obras.length" :disabled="importando || obrasSelecionadas.size === 0" @click="importar">
        {{ importando ? 'Importando...' : 'Importar selecionadas' }}
      </button>
    </section>

    <p v-if="resultado !== null" class="sucesso">
      {{ resultado }} publicação(ões) importada(s) com sucesso.
    </p>
  </div>
</template>

<style scoped>
.profile-page {
  max-width: 640px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
}

.subtitle {
  color: #575757;
  margin-bottom: 24px;
}

.fonte-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.tab {
  background-color: transparent;
  color: #575757;
  border: 1.6px solid #d9d9d9;
  border-radius: 111.11px;
  padding: 8px 18px;
  font-weight: 500;
}

.tab.ativo {
  background-color: #267a7a;
  color: white;
  border-color: #267a7a;
  font-weight: bold;
}

.search-form {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.search-form input {
  flex: 1;
  padding: 10px 14px;
  border: 1.6px solid #d9d9d9;
  border-radius: 12px;
}

button {
  background-color: #267a7a;
  color: white;
  border-radius: 111.11px;
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}

button:disabled {
  background-color: #a9c4c4;
  cursor: not-allowed;
}

.candidatos, .obras {
  list-style: none;
  padding: 0;
}

.candidatos li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e5e5;
}

.fonte-id {
  margin-left: 8px;
  color: #949494;
  font-size: 13px;
}

.instituicoes {
  color: #575757;
  font-size: 13px;
}

.obras li {
  padding: 8px 0;
}

.error {
  color: #c0392b;
}

.sucesso {
  color: #267a7a;
  font-weight: bold;
  margin-top: 16px;
}
</style>
