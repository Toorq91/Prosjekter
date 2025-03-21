<template>
  <nav class="bg-neutral-800 text-white text-xl p-4 flex justify-center space-x-4">
    <RouterLink to="/" class="glow-button">🏡 Hjem</RouterLink>
    <RouterLink to="/about" class="glow-button">😎 Meg</RouterLink>
    <RouterLink to="/interests" class="glow-button">✨ Interesser</RouterLink>
  </nav>
</template>

<style scoped>
.glow-button {
  padding: 10px 20px;
  border: 2px solid rgb(0, 195, 255);
  border-radius: 10px;
  background: rgb(0, 195, 255);
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 195, 255, 0.7);
}

.glow-button:hover {
  border-color: rgb(0, 195, 255);
  color: white;
  box-shadow: 0 0 15px rgb(0, 194, 253), 0 0 30px rgb(0, 194, 253);
  text-shadow: 0 0 10px rgb(0, 195, 255);
  background: rgba(0, 195, 255, 0.2);
}
</style>
