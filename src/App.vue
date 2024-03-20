<script setup>
import Business from "./components/Business.vue";
import SearchBar from "./components/Searchbar/SearchBar.vue";

const businesses = [
  {
    image: "/path/to/image1.jpg",
    name: "Pizza Heaven",
    address: "123 Main St",
    city: "Austin",
    state: "Texas",
    zipcode: "12345",
    category: "Italian",
    rating: 4.5,
    reviewCount: 100,
  },
  {
    image: "/path/to/image2.jpg",
    name: "Taco Tuesday",
    address: "456 Elm St",
    city: "Sacramento",
    state: "California",
    zipcode: "67890",
    category: "Mexican",
    rating: 4.0,
    reviewCount: 80,
  },
  {
    image: "/path/to/image3.jpg",
    name: "Sushi Salamander",
    address: "789 Oak St",
    city: "Denver",
    state: "Colorado",
    zipcode: "54321",
    category: "Japanese",
    rating: 4.8,
    reviewCount: 120,
  },
  {
    image: "/path/to/image3.jpg",
    name: "Ramen Town",
    address: "367 Poppy St",
    city: "Nashville",
    state: "Tennessee",
    zipcode: "55421",
    category: "Japanese",
    rating: 4.9,
    reviewCount: 250,
  },
];
</script>

<template>
  <SearchBar />
  <Business :businesses="businesses" />
</template>

<style scoped></style>
