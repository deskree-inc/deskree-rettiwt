<script setup lang="ts">
// import { computed } from "vue";

// import { useUserStore } from "@/stores/user";

import MainHeader from "./MainHeader.vue";
import EmptyTweetCard from "./EmptyTweetCard.vue";
import TweetCard from "./TweetCard.vue";

const tweets = [
  {
    id: 1,
    name: "Wellington Trollking",
    username: "@wellthetroll",
    avatar: "https://i.pravatar.cc/32",
    time: "2:23 pm",
    date: "Feb 14 2023",
    message:
      "My forehead is so big from all the disrespectful thoughts that I keep to myself.",
    factCheck: {
      passed: true,
      text: "It appears that it is true. Well, what can we say? The bigger the better, right?",
    },
  },
];
</script>

<template>
  <div class="col-span-1 h-screen relative">
    <MainHeader />

    <div
      v-if="tweets.length === 0"
      class="flex flex-col items-center gap-5 relative"
    >
      <EmptyTweetCard />
    </div>

    <div v-else class="flex flex-col items-center gap-5 relative">
      <TweetCard v-for="item in tweets" :key="item.id" :tweet="item" />
    </div>
  </div>
</template>
