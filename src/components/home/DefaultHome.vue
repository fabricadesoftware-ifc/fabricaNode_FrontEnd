<script lang="ts" setup>
import {
  TitlesHome,
  DescriptionTitle,
  ButtonGraph,
  GraphImage,
  DefaultFooter,
} from "@/components";
import { useTemplateStore } from "@/stores";

const templateStore = useTemplateStore();
</script>
<template>
    <div class="initial-page">
      <div class="title">
        <TitlesHome
          v-for="(text, index) in templateStore.homeTitles"
          :key="index"
          :FirstTitle="text.firstTitle"
          :SecondTitle="text.secondTitle"
          :ThirdTitle="text.thirdTitle"
          :Subtitle="text.subtitle"
        />
        <DescriptionTitle
          v-for="(text, index) in templateStore.homeTitles"
          :key="index"
          :Subtitle="text.subtitle"
        />
        <ButtonGraph />
      </div>
      <GraphImage />
    </div>
</template>

<style scoped>
.title {
  width: 50vw;
  padding-left: 100px;
}
.initial-page {
  display: flex;
  justify-content: space-around;
  margin-top: 11vh;
  width: 100%;
  height: 89vh;
  background-color: #fff;
}
@media (max-width:1450px) {
    .title{
        padding-left:130px;
    }
}
@media (max-width:1370px) {
    .title{
        padding-left:110px;
    }
}
</style>
