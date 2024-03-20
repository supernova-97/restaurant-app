<script setup>
import SearchBarInputs from "./SearchBarInputs.vue";
import SearchBarOptions from "./SearchBarOptions.vue";
import SearchButton from "./SearchButton.vue";
import { ref, defineEmits } from "vue";

const emits = defineEmits([
  "selectSortOption",
  "updateSearchTerm",
  "updateLocation",
]);

const sortOptions = {
  "Best Match": "best_match",
  "Highest Rating": "rating",
  "Most Reviewed": "review_count",
};
const sortOptionsKeys = Object.keys(sortOptions);

const searchTerm = ref("");
const location = ref("");
const sortingOption = ref("best_match");

function updateSearchTerm(value) {
  searchTerm.value = value;
  console.log("searchTerm", searchTerm.value);
}

function updateLocation(value) {
  location.value = value;
  console.log("location:", location.value);
}

function updateSortingOption(value) {
  sortingOption.value = value;
  console.log("sortOption", sortingOption.value);
}
</script>

<template>
  <div class="searchbar">
    <SearchBarOptions
      :sortOptionsKeys="sortOptionsKeys"
      @selectSortOption="updateSortingOption"
    />
    <SearchBarInputs
      :searchTerm="searchTerm"
      :location="location"
      @updateSearchTerm="updateSearchTerm"
      @updateLocation="updateLocation"
    />
    <SearchButton />
  </div>
</template>

<style>
.searchbar {
  background-image: url("https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
