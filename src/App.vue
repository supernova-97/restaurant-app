<script setup>
import { ref, defineEmits } from "vue";
import Business from "./components/Business.vue";
import SearchBar from "./components/Searchbar/SearchBar.vue";

const emit = defineEmits(["searchResults", "search"]);
const searchResults = ref(null);

function handleSearchResults(results) {
  searchResults.value = results;
}
</script>

<template>
  <SearchBar />
  <Business :searchResults="searchResults" />
</template>
