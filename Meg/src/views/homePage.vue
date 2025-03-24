<template>
  <div class="bg-gradient-to-bl from-black via-neutral-800 to-teal-500 min-h-screen">
    <h1 class="flex flex-col items-center text-center text-6xl font-bold underline w-full py-10
  text-transparent bg-clip-text bg-gradient-to-t from-yellow-500 to-red-500 shadow-lg shadow-red-500">
      Hjem:
    </h1>

    <div class="flex flex-col items-center justify-center flex-1 text-center py-30">
      <ul class="p-[20px] bg-gradient-to-r from-neutral-800/60 via-red-500/60 to-yellow-500/70 rounded-lg">
        <ul>
          <li class="w-[700px] py-4 text-5xl font-semibold transition duration-500 ease-in-out
          flex items-center justify-center
          bg-gradient-to-b from-red-500 to-yellow-500">
            <RouterLink to="/about" class="btn-flip flip-y block w-full">
              <span>Om meg</span>
              <span>Info</span>
            </RouterLink>
          </li>
          <li class="w-[700px] py-4 text-5xl font-semibold transition duration-500 ease-in-out
          flex items-center justify-center
          bg-gradient-to-b from-red-500 to-yellow-500">
            <RouterLink to="/interests" class="btn-flip flip-x reverse block w-full"> <!-- reverse for å endre retning på bloksen -->
              <span>Interesser</span>
              <span>Mine</span>
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

.btn-flip {
  height: 80px;
  position: relative;
}

.btn-flip span {
  /* background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%); */
  display: block;
  position: absolute;
  width: 700px;
  line-height: 80px;
  transition: all 0.4s ease-in-out;
}

/* Flipper opp og ned */
.btn-flip.flip-y span:nth-child(1) {
  transform: rotateX(90deg);
  transform-origin: 50% 50% -20px;
}

.btn-flip.flip-y span:nth-child(2) {
  transform: rotateX(0deg);
  transform-origin: 50% 50% -20px;
}

.btn-flip.flip-y:hover span:nth-child(1) {
  transform: rotateX(0deg);
}

.btn-flip.flip-y:hover span:nth-child(2) {
  transform: rotateX(-90deg);
}

/* Flipper sidelengs - (Venstre til høyre) */
.btn-flip.flip-x span:nth-child(1) {
  transform: rotateY(90deg);
  transform-origin: -20px 50%;
}

.btn-flip.flip-x span:nth-child(2) {
  transform: rotateY(0deg);
  transform-origin: -20px 50%;
}

.btn-flip.flip-x:hover span:nth-child(1) {
  transform: rotateY(0deg);
}

.btn-flip.flip-x:hover span:nth-child(2) {
  transform: rotateY(-90deg);
}

/* Flipper sidelengs - (Høyre til venstre) */
.btn-flip.flip-x.reverse span:nth-child(1) {
  transform: rotateY(-90deg);
  transform-origin: calc(100% + 20px) 50%;
}

.btn-flip.flip-x.reverse span:nth-child(2) {
  transform: rotateY(0deg);
  transform-origin: calc(100% + 20px) 50%;
}

.btn-flip.flip-x.reverse:hover span:nth-child(1) {
  transform: rotateY(0deg);
}

.btn-flip.flip-x.reverse:hover span:nth-child(2) {
  transform: rotateY(90deg);
}



/* Reklame rullegardin */
.scrolling-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100vw;
  padding: 20px 0;
  background: linear-gradient(to right, #300707, #5f5718);
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
