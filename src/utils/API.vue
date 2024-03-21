<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const API_KEY =
  "b-VU6ZUOOqd48WvMHNKCTa034aYkKvEBwl-ldkikwnKn23jBX8rl_HjZEUyCzgfH5YyQjny8aUklj9kRA1-XlwgrfO0OHy_TdYEqSHrligwNxrqI40E_B5gLTOv7ZXYx";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const info = ref([]);
//info.value.businesses[0].name

onMounted(() => {
  console.log("Test");
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=los%20angeles&term=pizza&sort_by=rating&limit=50",
      options
    )
    .then((response) => {
      info.value = response.data;
      console.log(info.value);
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template></template>

<style></style>
