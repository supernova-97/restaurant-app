<script setup></script>

<template>
  <div class="input-wrapper">
    <input class="search-input" />
    <input class="search-input" />
  </div>
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
</style>
