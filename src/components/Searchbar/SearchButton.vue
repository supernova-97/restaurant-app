<script setup>
function handleSubmit(e) {
  e.preventDefault;
  console.log(
    `Looking for ${props.searchTerm} in ${props.location}, filter: ${props.sortingOption}`
  );
}

const props = defineProps({
  sortingOption: {
    type: String,
  },
  searchTerm: {
    type: String,
  },
  location: {
    type: String,
  },
  isFormValid: {
    type: Boolean,
  },
});
</script>

<template>
  <button class="search-button" @click="handleSubmit" :disabled="!isFormValid">
    Let's go!
  </button>
</template>

<style>
.search-button {
  font-size: 1.4rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #c5922a;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px #ffffff70;
  }
}
</style>
