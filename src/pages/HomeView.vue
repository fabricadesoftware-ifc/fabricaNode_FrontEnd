<script setup lang="ts">
import { reactive, ref, watch, computed } from "vue"
import * as vNG from "v-network-graph"
import { ForceLayout } from "v-network-graph/lib/force-layout"

const nodeCount = ref(15)
const nodes = reactive({})
const edges = reactive({})

buildNetwork(nodeCount.value, nodes, edges)

watch(nodeCount, () => {
  buildNetwork(nodeCount.value, nodes, edges)
})

const d3ForceEnabled = computed({
  get: () => configs.view.layoutHandler instanceof ForceLayout,
  set: (value: boolean) => {
    if (value) {
      configs.view.layoutHandler = new ForceLayout()
    } else {
      configs.view.layoutHandler = new vNG.SimpleLayout()
    }
  },
})

const layoutHandler: vNG.LayoutHandler = new ForceLayout()

const configs = reactive(
  vNG.defineConfigs({
    view: {
      layoutHandler,
    },
    node: {
      label: {
        visible: true,
      },
    },
  })
)

function buildNetwork(count: number, nodes: vNG.Nodes, edges: vNG.Edges) {
  const idNums = [...Array(count)].map((_, i) => i)

  const newNodes = idNums.reduce((acc, id) => {
    acc[`node${id}`] = {}
    return acc
  }, {} as vNG.Nodes)
  Object.keys(nodes).forEach(id => delete nodes[id])
  Object.assign(nodes, newNodes)

  const makeEdgeEntry = (id1: number, id2: number): [string, vNG.Edge] => {
    return [`edge${id1}-${id2}`, { source: `node${id1}`, target: `node${id2}` }]
  }
  const newEdgesArray = idNums
    .map(n => [n, (Math.floor(n / 5) * 5) % count])
    .map(([n, m]) => (n === m ? [n, (n + 5) % count] : [n, m]))
    .map(([n, m]) => makeEdgeEntry(n, m))

  const newEdges = newEdgesArray.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {} as vNG.Edges)

  Object.keys(edges).forEach(id => delete edges[id])
  Object.assign(edges, newEdges)
}


</script>
<template>
  <div class="container">
    <div class="graph">
      <v-network-graph
        :zoom-level="0.5"
        :nodes="nodes"
        :edges="edges"
        :configs="configs"
      />
    </div>
    <div class="demo-control-panel">
      <label for="nodeCount">Número de nós:</label>
      <input id="nodeCount" type="number" v-model="nodeCount" :min="3" :max="200" class="styled-input" />
      <input id="d3ForceEnabled" type="checkbox" v-model="d3ForceEnabled" />
      <label for="d3ForceEnabled">Ativar gravidade</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.graph {
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.demo-control-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.styled-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 80px;
}
</style>
