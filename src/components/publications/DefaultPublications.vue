<script lang="ts" setup>
import { MobilePublications, DesktopPublications } from '@/components';
import { useScreen } from '@/composables';

const { isMobile } = useScreen();
</script>
<template>
    <header>
        <DesktopPublications v-if="!isMobile" />
        <MobilePublications v-else />
    </header>
</template>
