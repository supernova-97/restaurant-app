<script setup>
const props = defineProps({
  businesses: {
    type: Array,
    required: true,
  },
});
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
        <div>
          <p>{{ business.address }}</p>
          <p>{{ business.city }}</p>
          <p>{{ business.state }} {{ business.zipcode }}</p>
        </div>
        <div class="rating-wrapper">
          <p class="category">{{ business.category }}</p>
          <p class="rating">{{ business.rating }} stars</p>
          <p>{{ business.reviewCount }} reviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  padding: 20px 150px;
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

.rating-wrapper {
  text-align: right;
}

.category {
  color: #c5922a;
  font-weight: 700;
  font-size: 1.1rem;
}

.rating {
  color: #c5922a;
  font-weight: 700;
}
</style>
