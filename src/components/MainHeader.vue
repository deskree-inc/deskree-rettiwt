<script setup lang="ts">
const emit = defineEmits(["updateTweets"]);

import { computed, ref } from "vue";
import { deskree } from "@/deskree";
import { useUserStore } from "@/stores/user";

const user = computed(() => useUserStore().$state);
const tweet = ref({
  message: "",
});

async function createTweet() {
  try {
    await deskree
      .database()
      .from("tweets")
      .create({
      message: tweet.value.message,
    });
    tweet.value.message = "";
    emit("updateTweets");
  } catch (e) {
    console.error(e);
    throw e;
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex w-full gap-2">
      <img
        :src="user.avatar || 'https://i.pravatar.cc/150?img=1'"
        alt="avatar"
        class="rounded-full w-8 h-8"
      />

      <textarea
        v-model="tweet.message"
        class="w-full ml-2 bg-transparent outline-none placeholder:text-secondary break-words resize-none p-1"
        placeholder="What's on your mind?"
      />

      <div class="w-48 min-w-fit">
        <button
          class="bg-primary py-1.5 px-4 rounded-3xl hover:bg-primary-hover transition-colors duration-200 ease-in-out mobile:py-1 mobile:px-2 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="tweet.message.length === 0 || user === undefined"
          @click="createTweet"
        >
          Share Tweet
        </button>
      </div>
    </div>
    <div class="w-full h-0.5 mt-3 mb-7 bg-secondary"></div>
  </div>
</template>
