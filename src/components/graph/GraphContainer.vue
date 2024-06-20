<script setup lang="ts">
defineProps({
    nodes: Object,
    edges: Object,
    configs: Object,
});
</script>

<template>
    <div class="graph">
        <v-network-graph :zoom-level="0.5" :nodes="nodes" :edges="edges" :configs="configs" />
    </div>
</template>

<style scoped>
.graph {
    width: 600px;
    height: 400px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
}
</style>
