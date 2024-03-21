<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["selectSortOption"]);

const selectedOption = ref(null);

const props = defineProps({
  sortOptions: {
    type: Object,
  },
  sortOptionsKeys: {
    type: Array,
  },
});

function selectOption(optionKey) {
  const optionValue = props.sortOptions[optionKey];
  selectedOption.value = optionValue;
  emit("selectSortOption", optionValue);
}
</script>

<template>
  <div class="options-wrapper">
    <ul class="search-options">
      <li
        v-for="(option, key) in sortOptionsKeys"
        :key="key"
        @click="selectOption(option)"
        :class="{ selected: selectedOption === props.sortOptions[option] }"
        class="list-element"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style>
.options-wrapper {
  padding: 10px;
  width: 35%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #fff;
}

.search-options {
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  list-style-type: none;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
}

.list-element {
  width: 90px;
  text-align: center;
  cursor: pointer;
}

.selected {
  color: #c5922a;
}
</style>
