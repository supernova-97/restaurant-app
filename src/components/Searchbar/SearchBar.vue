<script setup>
import SearchBarInputs from "./SearchBarInputs.vue";
import SearchBarOptions from "./SearchBarOptions.vue";
import SearchButton from "./SearchButton.vue";
</script>

<template>
  <div class="searchbar">
    <SearchBarOptions />
    <SearchBarInputs />
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
