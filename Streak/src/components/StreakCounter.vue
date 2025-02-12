<template>
  <div class="text-center mt-4"> <!-- Justert margin-top -->
    <!-- Streak Knapp -->
    <button class="px-8 py-2 bg-blue-500 text-white font-semibold rounded-lg 
        shadow-md hover:bg-blue-600 focus:outline-none transition-all duration-300 mb-4">
      Streak: {{ streak }} 🔥
    </button>

    <!-- Ja/Nei knapper -->
    <div class="space-x-2 mb-4">
      <button
        @click="incrementStreak"
        class="px-8 py-2 bg-green-500 text-black font-semibold rounded-lg 
        shadow-md hover:bg-green-600 focus:outline-none transition-all duration-300"
      >
        Ja!
      </button>
      <button
        @click="resetStreak"
        class="px-6 py-2 bg-red-500 text-black font-semibold rounded-lg 
        shadow-md hover:bg-red-800 focus:outline-none transition-all duration-300"
      >
        Nei...
      </button>
    </div>

    <!-- Input for Streak -->
    <div class="mt-4">
      <input
        type="number"
        v-model="inputValue"
        placeholder="Skriv inn streak"
        class="px 8 py-2 bg-white text-red-500 font-bold rounded-lg
        shadow-md hover:bg-gray-200"
      />
      <button 
      @click="setStreak" 
      class="px-8 py-2 bg-black text-white font-semibold rounded-lg 
        shadow-md hover:bg-gray-600 focus:outline-none transition-all duration-300"
        >
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
      inputValue: null,
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
    },
    updateStreak(value) {
      const maxStreaks = 540;
      if (value > maxStreaks) {
        alert("Du har nådd maks streak!");
        return;
      }
      this.$emit("update:streak", value);
    },
  },
};
</script>
