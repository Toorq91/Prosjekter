<template>
  <div class="text-center mt-4"> <!-- Justert margin-top -->
    <!-- Streak Knapp -->
    <button class="px-25 py-4 bg-blue-500 text-white font-semibold rounded-lg 
        shadow-md hover:bg-blue-600 focus:outline-none transition-all duration-100 mb-4">
      Streak: {{ streak }} 🔥
    </button>

    <!-- Ja/Nei knapper -->
    <div class="space-x-2 mb-4">
      <button
        @click="incrementStreak"
        class="px-15 py-4 bg-green-500 text-black font-semibold rounded-lg 
        shadow-md hover:bg-green-600 focus:outline-none transition-all duration-100"
      >
        Ja!
      </button>
      <button
        @click="resetStreak"
        class="px-13 py-4 bg-red-500 text-black font-semibold rounded-lg 
        shadow-md hover:bg-red-900 focus:outline-none transition-all duration-100"
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
        class="input text-center px 8 py-4 bg-white text-black font-bold rounded-lg
        shadow-md hover:bg-gray-500"
      />
      <button 
      @click="setStreak" 
      class="px-10 py-4 bg-black text-white font-semibold rounded-lg 
        shadow-md hover:bg-gray-500 focus:outline-none transition-all duration-100"
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
