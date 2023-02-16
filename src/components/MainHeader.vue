<script setup lang="ts">
import { useTokenStore } from "@/stores/token";
import { computed, onMounted, ref } from "vue";
import { deskree, options } from "@/deskree";
import { useUserStore } from "@/stores/user";

const emit = defineEmits(["updateTweets"]);

const user = computed(() => useUserStore().user);
const token = computed(() => useTokenStore().tokens);
const tweet = ref({
  message: "",
});

onMounted(async () => {
  options["userToken"] = token.value;
});

async function createTweet() {
  try {
    const openai = await deskree
      // @ts-ignore
      .integration("openai", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      .post("/completions", {
        model: "text-davinci-003",
        prompt: `Is it true that '${tweet.value.message}'?`,
        temperature: 0.28,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    const factMessage = openai.data.choices[0].text;
    await deskree.database().from("tweets").create({
      message: tweet.value.message,
      factMessage,
    });
    tweet.value.message = "";
    emit("updateTweets");
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const checkForEmptyUser = computed(() => {
  return user.value.uid === "" || user.value.uid === null;
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex w-full gap-2">
      <img
        :src="user.avatar || '/img/placeholder.png'"
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
          :disabled="tweet.message.length === 0 || checkForEmptyUser"
          @click="createTweet"
        >
          Share Tweet
        </button>
      </div>
    </div>
    <div class="w-full h-0.5 mt-3 mb-7 bg-secondary"></div>
  </div>
</template>
