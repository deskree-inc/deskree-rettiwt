<script setup lang="ts">
import LeftNav from "@/components/LeftNav.vue";
import MainTweets from "@/components/MainTweets.vue";
</script>

<template>
  <main
    class="w-screen h-screen bg-background text-white max-h-screen overflow-scroll pt-10"
  >
    <div class="grid grid-cols-3 mobile:grid-cols-1 mobile:px-3">
      <!-- Left column -->
      <LeftNav />

      <!-- Middle column -->
      <MainTweets />

      <!-- Right column -->
      <div class="col-span-1 h-screen mobile:hidden"></div>
    </div>
  </main>
</template>
