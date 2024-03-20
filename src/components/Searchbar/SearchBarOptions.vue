<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["selectSortOption"]);

const props = defineProps({
  sortOptionsKeys: {
    type: Object,
    required: true,
  },
});

function selectOption(option) {
  emit("selectSortOption", option);
}
</script>

<template>
  <div class="options-wrapper">
    <ul class="search-options">
      <li
        v-for="(option, index) in sortOptionsKeys"
        :key="index"
        @click="selectOption(option)"
      >
        <span class="word">{{ option.split(" ")[0] }}</span>
        <span class="word">{{ option.split(" ")[1] }}</span>
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

.search-options li .word {
  display: block; /* Display each word on a separate line */
}
</style>
