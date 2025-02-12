<template>
  <div class="flex justify-center items-center w-1/3 h-1/4 mx-auto overflow-hidden relative">
    <img :src="image" :alt="`Emoji for streak ${streak}`" class="w-[400px] h-[400px] object-cover" />
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
    image() {
      if (this.streak === 0) return "img/NarutoSad.jpg";
      if (this.streak < 10) return "img/NarutoHappy.jpg";
      if (this.streak < 20) return "img/NarutoStreak.png";
      if (this.streak < 30) return "img/NarutoStreak2.jpg";
      if (this.streak < 50) return "img/NarutoStreak3.png";
      return "img/NarutoGodlike.jpg";
    },
  },
};
</script>

<style scoped>
.flex {
  height: calc(100vh - 300px);
}
</style>
