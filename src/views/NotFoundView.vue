<template>
  <div class="not-found-container">
    <h1 class="not-found-title">404</h1>
    <p class="not-found-message">
      The page you're looking for doesn't exist.
      <router-link to="/" class="back-home-link">Return to home</router-link>.
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
}

.not-found-title {
  font-size: 10rem;
  color: #ff6347;
  margin-bottom: 20px;
}

.not-found-message {
  font-size: 1.2rem;
  color: #333;
}

.back-home-link {
  color: #007bff;
  text-decoration: none;
}

.back-home-link:hover {
  text-decoration: underline;
}
</style>
