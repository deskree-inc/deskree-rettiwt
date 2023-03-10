<script setup lang="ts">
import dayjs from "dayjs";

const props = defineProps<{
  tweet: {
    uid: string;
    message: string;
    author: {
      uid: string;
      username: string;
      email: string;
      avatar: string;
      roles: [];
      createdAt: string;
      updatedAt: string;
    };
    factMessage?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}>();

const checkmarkPath = (passed: boolean | null) => {
  if (!passed) return "/img/checkmark/gray-checkmark.svg";
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
          :src="
            props.tweet.author.hasOwnProperty('avatar') &&
            props.tweet.author.avatar.length > 0
              ? props.tweet.author.avatar
              : 'https://i.pravatar.cc/32'
          "
          alt="avatar"
          class="rounded-full w-8 h-8"
        />
        <div class="flex flex-col">
          <h4 class="font-normal font-sans text-xs text-white">
            {{ props.tweet.author.username }}
          </h4>
          <span class="font-normal font-sans text-xxs text-color-tertiary"
            >@{{ props.tweet.author.username }}</span
          >
        </div>
      </div>
      <div class="flex items-center gap-1">
        <span class="font-normal font-sans text-xxs text-color-tertiary">{{
          dayjs(props.tweet.createdAt).format("hh:mm a")
        }}</span>
        <span class="font-normal font-sans text-xxs text-color-tertiary">{{
          dayjs(props.tweet.createdAt).format("D MMM YY")
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
            :src="
              checkmarkPath(
                props.tweet.factMessage !== undefined &&
                  props.tweet.factMessage
                    .replace(/(\r\n|\n|\r)/gm, '')
                    .toLowerCase()
                    .startsWith('yes')
              )
            "
            alt="Green Checkmark"
          />
          <span
            v-if="
              props.tweet.factMessage !== undefined &&
              props.tweet.factMessage
                .replace(/(\r\n|\n|\r)/gm, '')
                .toLowerCase()
                .startsWith('yes')
            "
            class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check Passed</span
          >
          <span
            v-else-if="
              props.tweet.factMessage !== undefined &&
              props.tweet.factMessage
                .replace(/(\r\n|\n|\r)/gm, '')
                .toLowerCase()
                .startsWith('no')
            "
            class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check Failed</span
          >
          <span
            v-else
            class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check Ineligible
          </span>
        </div>
        <span class="font-semibold font-sans text-xxs text-color-tertiary">{{
          props.tweet.factMessage
        }}</span>
      </div>
    </div>
  </div>
</template>
