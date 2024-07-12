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
  <div>
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
  width: 100%;
  height: 89vh;
  background-color: #fff;
  background-image: -webkit-linear-gradient(-22deg, #fff 50%, #22262f 50%);
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
