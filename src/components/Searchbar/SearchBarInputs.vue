<script setup>
import { ref, defineProps } from "vue";
import { search } from "@/utils/search";

const props = defineProps({
  sortingOption: {
    type: String,
  },
});

const searchTerm = ref("");
const location = ref("");

function handleSubmit() {
  const searchValues = {
    searchTerm: searchTerm.value,
    location: location.value,
    sortingOption: props.sortingOption,
  };
  search(searchValues.searchTerm, searchValues.location, props.sortingOption);
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="input-wrapper">
      <input
        class="search-input"
        v-model="searchTerm"
        placeholder="What are you craving?"
        required
      />
      <input
        class="search-input"
        v-model="location"
        placeholder="Where do you want to eat?"
        required
      />
    </div>
    <button class="search-button" @click="handleSubmit">Let's go!</button>
  </form>
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

.form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

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
