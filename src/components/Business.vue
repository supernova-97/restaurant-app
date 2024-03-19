<script setup>
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
];
</script>

<template>
  <div class="main-wrapper">
    <div
      class="business-wrapper"
      v-for="(business, index) in businesses"
      :key="index"
    >
      <h1 class="business-header">{{ business.name }}</h1>
      <div class="info-wrapper">
        <p>
          {{ business.address }}, {{ business.city }}, {{ business.zipcode }}
          {{ business.state }}
        </p>
        <p>{{ business.category }}</p>
        <p>Rating: {{ business.rating }}</p>
        <p>Reviews: {{ business.reviewCount }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
}

.business-wrapper {
  width: 30%;
  height: 250px;
  margin: 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.business-header {
  text-align: center;
  padding: 10px;
}

.info-wrapper {
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
