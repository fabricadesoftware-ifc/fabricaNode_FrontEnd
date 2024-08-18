<script lang="ts" setup>
import { DesktopHeader, MobileHeader } from '@/components';
import { useScreen } from '@/composables';

const { isMobile } = useScreen();
</script>
<template>
    <header>
        <DesktopHeader v-if="!isMobile" />
        <MobileHeader v-else />
    </header>
</template>
