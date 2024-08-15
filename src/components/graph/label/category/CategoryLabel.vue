<script lang="ts" setup>
defineProps({
    categories: Array
})
</script>

<template>
    <div class="category-position">
        <div class="node-category" v-for="(category, index) in categories" :key="index">
            {{ category.name }}
        </div>
    </div>
</template>

<style scoped>
.node-category {
    font-size: 13px;
    color: #324CD6;
    margin: 2px 0 10px 0;
    border-right: 1px solid #000000;
    padding: 0 5px 0 5px;
}

.node-category:last-child {
    border-right: none;
}

.category-position {
    display: flex;
    flex-direction: row;
}
</style>