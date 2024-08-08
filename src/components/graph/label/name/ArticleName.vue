<script lang="ts" setup>
defineProps({
  name: String
});

</script>

<template>
     <div class="node-name">
      {{ name }}
    </div>
</template>

<style scoped>
.node-name {
  font-size: 14px;
  margin-left: 10px;
}
</style>