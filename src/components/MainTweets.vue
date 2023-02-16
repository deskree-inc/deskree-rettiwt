<script setup lang="ts">
import MainHeader from "./MainHeader.vue";
import EmptyTweetCard from "./EmptyTweetCard.vue";
import TweetCard from "./TweetCard.vue";
import { ref, onMounted } from "vue";
import { deskree } from "@/deskree";
import type { TweetsDataType } from "@/interfaces/deskree-types.interface";

let tweets = ref([] as { attributes: TweetsDataType; uid: string }[]);

async function getTweets() {
  try {
    const t: { data: { data: { attributes: TweetsDataType; uid: string }[] } } =
      await deskree
        .database()
        .from("tweets")
        .get({
          includes: ["author"],
        });
    tweets.value = t.data.data;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

onMounted(async () => {
  await getTweets();
});
</script>

<template>
  <div class="col-span-1 h-screen relative">
    <MainHeader @update-tweets="getTweets" />

    <div
      v-if="tweets.length === 0"
      class="flex flex-col items-center gap-5 relative"
    >
      <EmptyTweetCard />
    </div>

    <div v-else class="flex flex-col items-center gap-5 relative">
      <TweetCard
        v-for="item in tweets"
        :key="item.uid"
        :tweet="item.attributes"
      />
    </div>
  </div>
</template>
