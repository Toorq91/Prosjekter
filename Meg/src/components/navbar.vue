<template>
  <nav class="bg-black text-xl p-4 flex justify-center space-x-4">
    <RouterLink to="/" class="glow-button">🏡 Hjem</RouterLink>
    <RouterLink to="/about" class="glow-button">😎 Meg</RouterLink>
    <RouterLink to="/interests" class="glow-button">✨ Interesser</RouterLink>
  </nav>
</template>

<style scoped>
.glow-button {
  padding: 10px 20px;
  border: 2px solid rgb(202, 17, 17);
  border-radius: 10px;
  background: rgb(202, 17, 17);
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 14px;
  opacity: 0.85;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(202, 17, 17, 0.7);
}

.glow-button:hover {
  border-color: rgb(202, 17, 17);
  color: rgb(0, 195, 255);
  box-shadow: 0 0 15px rgb(202, 17, 17), 0 0 30px rgb(202, 17, 17);
  text-shadow: 0 0 10px rgb(202, 17, 17);
  background: rgba(202, 17, 17, 0.2);
}
</style>
