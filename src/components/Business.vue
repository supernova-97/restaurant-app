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
  <div class="main-wrapper">
    <div
      class="business-wrapper"
      v-for="(business, index) in businesses"
      :key="index"
    >
      <img class="business-image" src="../assets/images/pizza.png" />
      <h1 class="business-header">{{ business.name }}</h1>
      <div class="info-wrapper">
        <div class="address-wrapper">
          <p>{{ business.address }}</p>
          <p>{{ business.city }}</p>
          <p>{{ business.state }} {{ business.zipcode }}</p>
        </div>
        <div class="rating-wrapper">
          <p>{{ business.category }}</p>
          <p>{{ business.rating }} stars</p>
          <p>{{ business.reviewCount }} reviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  padding: 20px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.business-wrapper {
  padding: 10px;
  width: 270px;
  height: fit-content;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0px 0px 15px #00000030;
}

.business-header {
  font-size: 1.7rem;
  margin: 10px 0;
}

.business-image {
  height: 260px;
  width: 250px;
  border-radius: 5px;
}

.info-wrapper {
  display: flex;
  justify-content: space-between;
}

.address-wrapper {
}

.rating-wrapper {
  text-align: right;
}
</style>
