<template>
  <div class="bg-neutral-900 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-10
  text-transparent bg-clip-text bg-gradient-to-t from-yellow-500  to-red-500 shadow-xl shadow-red-500">
      Hjem:
    </h1>

    <div class="flex flex-col items-center justify-center flex-1 text-center py-30">
      <ul class="p-[20px] bg-gradient-to-r from-neutral-800/60 via-red-500/60 to-yellow-500/70 rounded-lg">
        <ul>
          <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
          bg-gradient-to-b from-red-500 to-yellow-500
          hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
            <RouterLink to="/about" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
              Om meg
            </RouterLink>
          </li>
          <li class="w-[700px] py-4 text-neutral-900 text-5xl font-semibold transition duration-500 ease-in-out
          bg-gradient-to-b from-red-500 to-yellow-500
          hover:bg-gradient-to-b hover:from-yellow-500/60 hover:to-red-500/60">
            <RouterLink to="/interests" class="block px-4 py-4 hover:text-blue-500/70 transition duration-500">
              Interesser
            </RouterLink>
          </li>
        </ul>
      </ul>
    </div>

    <div class="scrolling-container">
      <div class="scrolling-wrapper">
        <img v-for="(image, index) in images" :key="'left-' + index" :src="image" class="scrolling-image" />
      </div>
    </div>

  </div>
</template>

<script setup>
const images = [
  "/img/meny.png",
  "/img/rema1000.png",
  "/img/spar.png",
  "/img/kiwi.png",
  "/img/meny.png",
  "/img/rema1000.png",
  "/img/spar.png",
  "/img/kiwi.png",
  "/img/meny.png",
  "/img/rema1000.png",
  "/img/spar.png",
  "/img/kiwi.png",
  "/img/meny.png",
  "/img/rema1000.png",
  "/img/spar.png",
  "/img/kiwi.png",
]
</script>

<style scoped>
.scrolling-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100vw;
  padding: 20px 0;
  background: linear-gradient(to right, #4e0f0f, #857620);
}

.scrolling-wrapper {
  display: flex;
  gap: 150px;
  width: 58.2%;
  animation: scroll 10s linear infinite;
}

.scrolling-image {
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
