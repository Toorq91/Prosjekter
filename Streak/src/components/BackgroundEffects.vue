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
      bubbles: [], // Liste med bobler
      exclusionZones: [], // Eksklusjonsområder for bobleplassering
    };
  },
  mounted() {
    // Oppdater eksklusjonsområder etter render
    this.updateExclusionZones();
  },
  watch: {
    streak: {
      immediate: true,
      handler(newValue) {
        // Oppdater boblene basert på ny streak-verdi
        if (newValue === 0) {
          this.bubbles = [];
        } else {
          this.updateBubbles(newValue);
        }
      },
    },
  },
  methods: {
    updateBubbles(newStreak) {
      // Fjern eller legg til bobler basert på ønsket antall
      const currentCount = this.bubbles.length;

      if (newStreak > currentCount) {
        this.generateBubbles(newStreak - currentCount);
      } else if (newStreak < currentCount) {
        this.bubbles = this.bubbles.slice(0, newStreak);
      }
    },
    generateBubbles(count) {
      const colors = ["#3b82f6", "#10b981", "#facc15", "#f43f5e", "#8b5cf6"];
      const margin = 20; // Margin på 20px fra kantene

      for (let i = 0; i < count; i++) {
        let bubble = null;
        let tries = 0;

        // Generer boble og valider posisjon
        do {
          const bubbleSize = Math.random() * 50 + 20; // Størrelse: 20px - 70px
          const maxWidth = window.innerWidth - bubbleSize - margin;
          const maxHeight = window.innerHeight - bubbleSize - margin;

          bubble = {
            size: `${bubbleSize}px`,
            top: `${Math.random() * (maxHeight - margin) + margin}px`,
            left: `${Math.random() * (maxWidth - margin) + margin}px`,
            duration: `${Math.random() * 3 + 2}s`, // Variabel hastighet
            color: colors[Math.floor(Math.random() * colors.length)], // Tilfeldig farge
          };

          tries++;
        } while (this.isInExclusionZone(bubble) && tries < 10);

        if (!this.isInExclusionZone(bubble)) {
          this.bubbles.push(bubble);
        }
      }
    },
    isInExclusionZone(bubble) {
      const bubbleTop = parseFloat(bubble.top);
      const bubbleLeft = parseFloat(bubble.left);
      const bubbleSize = parseFloat(bubble.size);

      // Sjekk overlap med eksklusjonsområder
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

      const streakButton = this.$refs.streakButton;
      const emojiImage = this.$refs.emojiImage;

      if (streakButton) {
        const streakButtonRect = streakButton.getBoundingClientRect();
        this.exclusionZones.push({
          top: streakButtonRect.top,
          bottom: streakButtonRect.bottom,
          left: streakButtonRect.left,
          right: streakButtonRect.right,
        });
      }

      if (emojiImage) {
        const emojiImageRect = emojiImage.getBoundingClientRect();
        this.exclusionZones.push({
          top: emojiImageRect.top,
          bottom: emojiImageRect.bottom,
          left: emojiImageRect.left,
          right: emojiImageRect.right,
        });
      }
    },
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
  animation: float 3s ease-in-out infinite;
}
</style>
