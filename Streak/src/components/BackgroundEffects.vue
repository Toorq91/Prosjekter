<template>
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <!-- Generer bobler dynamisk basert på streak -->
      <div
        v-for="(bubble, index) in bubbles"
        :key="index"
        class="absolute rounded-full opacity-70 animate-pulse"
        :style="{
          width: bubble.size,
          height: bubble.size,
          top: bubble.top,
          left: bubble.left,
          animationDuration: bubble.duration,
          backgroundColor: bubble.color,
        }"
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
    data() {
      return {
        bubbles: [], // Tom liste for boblene
        exclusionZones: [],
      };
    },
    mounted() {
      // Oppdater exclusionZones etter at komponentene er rendret
      this.updateExclusionZones();
    },
    watch: {
      streak: {
        immediate: true,
        handler(newValue) {
          if (newValue === 0) {
            this.bubbles = [];
          } else if (newValue > this.bubbles.length) {
            this.generateBubbles(newValue - this.bubbles.length);
          }
        },
      },
    },
    methods: {
      generateBubbles(count) {
        const colors = ["#3b82f6", "#10b981", "#facc15", "#f43f5e", "#8b5cf6"];
        const margin = 20; // Margin på 20px fra kantene
  
        for (let i = 0; i < count; i++) {
          let bubble = null;
          let tries = 0;
  
          // Prøv å finne en gyldig posisjon for boblen
          do {
            const bubbleSize = Math.random() * 50 + 20; // Tilfeldig størrelse: 20px - 70px
            const maxWidth = window.innerWidth - bubbleSize - margin;
            const maxHeight = window.innerHeight - bubbleSize - margin;
  
            bubble = {
              size: `${bubbleSize}px`,
              top: `${Math.random() * (maxHeight - margin) + margin}px`,
              left: `${Math.random() * (maxWidth - margin) + margin}px`,
              duration: `${Math.random() * 3 + 2}s`,
              color: colors[Math.floor(Math.random() * colors.length)], // Velg tilfeldig farge
            };
  
            tries++;
          } while (this.isInExclusionZone(bubble) && tries < 10);
  
          // Hvis boblen er valid, legg den til
          if (!this.isInExclusionZone(bubble)) {
            this.bubbles.push(bubble);
          }
        }
      },
  
      isInExclusionZone(bubble) {
        const bubbleTop = parseFloat(bubble.top);
        const bubbleLeft = parseFloat(bubble.left);
        const bubbleSize = parseFloat(bubble.size);
  
        // Sjekk om boblen overlapper med noen av eksklusjonsområdene
        return this.exclusionZones.some((zone) => {
          const zoneTop = zone.top;
          const zoneBottom = zone.bottom;
          const zoneLeft = zone.left;
          const zoneRight = zone.right;
  
          return (
            bubbleTop + bubbleSize > zoneTop &&
            bubbleTop < zoneBottom &&
            bubbleLeft + bubbleSize > zoneLeft &&
            bubbleLeft < zoneRight
          );
        });
      },
  
      updateExclusionZones() {
        this.exclusionZones = [];
  
        // Hent posisjonen til streak-knappen og bildet
        const streakButton = this.$refs.streakButton;
        const emojiImage = this.$refs.emojiImage;
  
        if (streakButton) {
          const streakButtonRect = streakButton.getBoundingClientRect();
          this.exclusionZones.push({
            top: streakButtonRect.top,
            bottom: streakButtonRect.bottom,
            left: streakButtonRect.left,
            right: streakButtonRect.right
          });
        }
  
        if (emojiImage) {
          const emojiImageRect = emojiImage.getBoundingClientRect();
          this.exclusionZones.push({
            top: emojiImageRect.top,
            bottom: emojiImageRect.bottom,
            left: emojiImageRect.left,
            right: emojiImageRect.right
          });
        }
      }
    },
  };
  </script>
  
  <style scoped>
  @keyframes float {
    0% {
      transform: translateY(0);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-20px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0.7;
    }
  }
  
  .animate-pulse {
    animation: float linear infinite;
  }
  </style>
  