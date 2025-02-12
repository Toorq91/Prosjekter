<template>
    <div>
      <div
        v-for="(rift, index) in rifts"
        :key="index"
        class="absolute bg-black opacity-70"
        :class="rift.isAngled ? 'angled-rift' : ''"
        :style="{ left: rift.left, top: rift.top, width: rift.width, height: rift.height, transform: rift.transform }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      streak: {
        type: Number,
        required: true,
      },
    },
    computed: {
      rifts() {
        const rifts = [];
        const rows = Math.ceil(this.streak / 10); // Antall rader
        const spacingX = 5; // Horisontal spacing i vw
        const spacingY = 10; // Vertikal spacing i vh
        const riftWidth = "0.25vw";
        const riftHeight = "5vh";
  
        for (let i = 0; i < this.streak; i++) {
          const row = Math.floor(i / 10); // Hvilken rad
          const col = i % 10; // Hvilken kolonne
          const isAngled = (i + 1) % 5 === 0; // Hver 5. rift er skrå
  
          rifts.push({
            left: `${col * spacingX}vw`,
            top: `${row * spacingY}vh`,
            width: riftWidth,
            height: riftHeight,
            isAngled,
            transform: isAngled ? "rotate(-25deg)" : "none",
          });
        }
        return rifts;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Stilen for vanlige rifter */
  .angled-rift {
    transform-origin: left center; /* Rotasjonspunkt */
  }
  </style>
  