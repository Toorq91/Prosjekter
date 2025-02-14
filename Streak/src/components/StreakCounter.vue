<template>
  <div class="text-center mt-4" style="z-index: 10; position: relative;">
    <!-- Streak Knapp -->
    <button ref="streakButton" class="w-[405px] h-[50px] bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition-all duration-100 mb-4">
      Streak: {{ streak }} 🔥
    </button>

    <!-- Ja/Nei knapper -->
    <div class="space-x-2 mb-4">
      <button @click="incrementStreak" class="w-[200px] h-[50px] bg-green-500 text-black font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none transition-all duration-100">
        Ja!
      </button>
      <button @click="resetStreak" class="w-[200px] h-[50px] bg-red-500 text-black font-semibold rounded-lg shadow-md hover:bg-red-900 focus:outline-none transition-all duration-100">
        Nei...
      </button>
    </div>

    <!-- Input for Streak -->
    <div class="space-x-2 mt-4">
      <input
        type="number"
        v-model="inputValue"
        placeholder="Skriv inn streak"
        class="input text-center w-[200px] h-[50px] bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-500"
      />
      <button @click="setStreak" class="w-[200px] h-[50px] bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition-all duration-100">
        Sett streak
      </button>
    </div>
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
  emits: ["update:streak"],
  data() {
    return {
      inputValue: null, // For å holde input-verdien
    };
  },
  methods: {
    incrementStreak() {
      this.updateStreak(this.streak + 1);
    },
    resetStreak() {
      this.updateStreak(0);
    },
    setStreak() {
      const value = parseInt(this.inputValue);
      if (isNaN(value) || value < 0) {
        alert("Vennligst skriv inn et gyldig tall!");
      } else {
        this.updateStreak(value);
      }
      // Tøm input-feltet etter at streak er satt
      this.inputValue = null;
    },
    updateStreak(value) {
      const maxStreaks = 540;
      if (value > maxStreaks) {
        alert("Du har nådd maks streak!");
        return;
      }
      this.$emit("update:streak", value); // Oppdater streak
    },
    handleEnterKey(event) {
      if (event.key === "Enter") {
        this.setStreak();
      }
    },
  },
  mounted() {
    // Lytt etter Enter-tasten
    window.addEventListener("keydown", this.handleEnterKey);
  },
  beforeDestroy() {
    // Fjern eventlistener når komponenten blir fjernet
    window.removeEventListener("keydown", this.handleEnterKey);
  },
};
</script>
