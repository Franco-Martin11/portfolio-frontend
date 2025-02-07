<template>
  <div>
    <main>
      <h1>Welcome to My Portfolio</h1>
      <p>
        This is the homepage of my portfolio. Here you can find information about me and my projects.
      </p>
      <nuxt-link to="/about">Learn more about me</nuxt-link>
      <nuxt-link to="/projects">View my projects</nuxt-link>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
main {
  text-align: center;
  padding: 20px;
}
</style>