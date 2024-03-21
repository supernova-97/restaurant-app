<script setup>
import { defineProps, defineEmits, computed } from "vue";
import SearchButton from "./SearchButton.vue";

const props = defineProps({
  searchTerm: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sortingOption: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["updateSearchTerm", "updateLocation"]);

function updateSearchTerm(event) {
  emit("updateSearchTerm", event.target.value);
}

function updateLocation(event) {
  emit("updateLocation", event.target.value);
}

const isFormValid = computed(() => {
  return props.searchTerm.trim() !== "" && props.location.trim() !== "";
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="input-wrapper">
      <input
        class="search-input"
        :value="searchTerm"
        @input="updateSearchTerm"
        placeholder="What are you craving?"
        required
      />
      <input
        class="search-input"
        :value="location"
        @input="updateLocation"
        placeholder="Where do you want to eat?"
        required
      />
    </div>
    <SearchButton
      :searchTerm="searchTerm"
      :location="location"
      :sortingOption="sortingOption"
      :isFormValid="isFormValid"
    />
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
</style>
