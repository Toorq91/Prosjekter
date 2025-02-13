<template>
  <div class="h-screen w-full overflow-hidden bg-gray-800 relative">
    <EmojiDisplay :streak="streak" />
    <StreakCounter :streak="streak" @update:streak="updateStreak" />

    <div class="h-screen w-full flex justify-center items-center">
  </div>

  </div>
</template>

<script>
import EmojiDisplay from "./components/EmojiDisplay.vue";
import StreakCounter from "./components/StreakCounter.vue";

export default {
  components: {
    EmojiDisplay,
    StreakCounter,
  },
  data() {
    return {
      streak: parseInt(localStorage.getItem("streak")) || 0,
    };
  },
  methods: {
    updateStreak(value) {
      this.streak = value;
      localStorage.setItem("streak", value);
    },
  },
};
</script>
