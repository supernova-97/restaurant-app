<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["updateSearchTerm", "updateLocation"]);

function updateSearchTerm(event) {
  emit("updateSearchTerm", event.target.value); 
}

function updateLocation(event) {
  emit("updateLocation", event.target.value); 
}
</script>

<template>
  <div class="input-wrapper">
    <input class="search-input" :value="searchTerm" @input="updateSearchTerm" />
    <input class="search-input" :value="location" @input="updateLocation" />
  </div>
</template>

<style>
.input-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.search-input {
  height: 40px;
  width: 25%;
  margin: 30px;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 1rem;

  &:focus {
    outline: 1px solid #808080;
  }
}
</style>
