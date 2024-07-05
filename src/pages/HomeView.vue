<script lang="ts" setup>
import { DefaultHeader, TitlesHome, DescriptionTitle, ButtonGraph, GraphImage } from '@/components'
</script>
<template>
  <div>
    <DefaultHeader />
    <div class="initial-page">
      <div class="title">
        <TitlesHome />
        <DescriptionTitle />
        <ButtonGraph />
      </div>
      <GraphImage />
    </div>
  </div>
</template>

<style scoped>
.title {
  width: 50vw;
  padding-left: 170px;
}
.initial-page {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 90vh;
  background-color: #fff;
  background-image: -webkit-linear-gradient(-22deg, #fff 50%, #22262f 50%);
}
</style>
