<script lang="ts" setup>
import { DefaultHome } from "@/components";
import { useAuth, useSetGraph } from '@/composables';

useSetGraph()
useAuth()
</script>
<template>
  <DefaultHome />
</template>
