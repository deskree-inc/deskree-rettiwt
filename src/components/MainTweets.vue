<script setup lang="ts">
import MainHeader from "./MainHeader.vue";
import TweetCard from "./TweetCard.vue";
</script>

<template>
  <div class="col-span-1 h-screen relative">
    <MainHeader />

    <div class="flex flex-col items-center gap-5 relative">
      <TweetCard v-for="i in 10" :key="i" />
    </div>
  </div>
</template>
