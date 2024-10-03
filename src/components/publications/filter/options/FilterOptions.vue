<script lang="ts" setup>
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  selects: {
    type: Array,
    required: true
  }
})
const optionSelect = props.selects
</script>
<template>
  <div class="filter-options">
    <div v-for="(option, index) in props.options" :key="index">
      <input
        type="checkbox"
        :id="index"
        :name="option.name"
        v-model="optionSelect"
        :value="option.id"
        @change="$emit('updateOption', optionSelect)"
      />
      <label :for="index"> {{ option.name }}</label>
    </div>
  </div>
</template>

<style scoped>
.filter-options {
  margin-top: 15px;
}

.filter-options div {
  display: flex;
  margin: 18px 0;
  font-weight: 450;
}

.filter-options label {
  margin-left: 8px;
  cursor: pointer;
  user-select: none;
}

.filter-options input {
  color: #848484;
  border: 1px solid #848484;
  appearance: none;
  height: 17px;
  width: 17px;
  border-radius: 4px;
  cursor: pointer;
}

.filter-options input:checked {
  background-color: #2c7a7a;
}
</style>
