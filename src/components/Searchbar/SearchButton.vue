<script setup>
import { ref, defineProps } from "vue";
import axios from "axios";

const API_KEY =
  "b-VU6ZUOOqd48WvMHNKCTa034aYkKvEBwl-ldkikwnKn23jBX8rl_HjZEUyCzgfH5YyQjny8aUklj9kRA1-XlwgrfO0OHy_TdYEqSHrligwNxrqI40E_B5gLTOv7ZXYx";
const CORS_URL = "https://cors-anywhere.herokuapp.com";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const info = ref([]);

function search() {
  const params = {
    location: props.location,
    term: props.searchTerm,
    limit: 50,
  };
  
  if (props.sortingOption) {
    params.sort_by = props.sortingOption;
  }

  axios
    .get(`${CORS_URL}/https://api.yelp.com/v3/businesses/search`, {
      params,
      headers: options.headers,
    })
    .then((response) => {
      info.value = response.data;
      console.log(info.value);
    })
    .catch((error) => {
      console.error(error);
    });
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
  <button class="search-button" @click="search" :disabled="!isFormValid">
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
