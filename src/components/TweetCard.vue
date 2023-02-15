<script setup lang="ts">
const props = defineProps<{
  tweet: {
    id: number;
    name: string;
    username: string;
    avatar: string;
    time: string;
    date: string;
    message: string;
    factCheck: {
      passed: boolean | null;
      text: string;
    };
  };
}>();

const checkmarkPath = (passed: boolean | null) => {
  if (passed === null) return "/img/checkmark/gray-checkmark.svg";
  if (passed) return "/img/checkmark/green-checkmark.svg";
  return "/img/checkmark/red-checkmark.svg";
};
</script>

<template>
  <div
    class="w-full p-6 min-h-min bg-background-secondary rounded-xl gap-6 flex flex-col"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img
          :src="props.tweet.avatar"
          alt="avatar"
          class="rounded-full w-8 h-8"
        />
        <div class="flex flex-col">
          <h4 class="font-normal font-sans text-xs text-white">
            {{ props.tweet.username }}
          </h4>
          <span class="font-normal font-sans text-xxs text-color-tertiary">{{
            props.tweet.username
          }}</span>
        </div>
      </div>
      <div class="flex items-center gap-1">
        <span class="font-normal font-sans text-xxs text-color-tertiary">{{
          props.tweet.time
        }}</span>
        <span class="font-normal font-sans text-xxs text-color-tertiary">{{
          props.tweet.date
        }}</span>
      </div>
    </div>
    <p class="font-normal font-sans text-base text-white">
      {{ props.tweet.message }}
    </p>
    <div class="w-full">
      <div class="w-full h-0.5 bg-secondary"></div>
      <div class="flex flex-col gap-1 mt-4">
        <div class="flex items-center gap-2">
          <img
            :src="checkmarkPath(props.tweet.factCheck.passed)"
            alt="Green Checkmark"
          />
          <span
            v-if="props.tweet.factCheck.passed !== null"
            class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check
            {{ props.tweet.factCheck.passed ? "Passed" : "Failed" }}</span
          >
          <span
            v-else
            class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check Ineligible
          </span>
        </div>
        <span class="font-semibold font-sans text-xxs text-color-tertiary">{{
          props.tweet.factCheck.text
        }}</span>
      </div>
    </div>
  </div>
</template>
