<script setup lang="ts"></script>

<template>
  <div
    class="w-full p-6 min-h-min bg-background-secondary rounded-xl gap-6 flex flex-col"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/32"
          alt="avatar"
          class="rounded-full w-8 h-8"
        />
        <div class="flex flex-col">
          <h4 class="font-normal font-sans text-xs text-text">
            Wellington Trollking
          </h4>
          <span class="font-normal font-sans text-xxs text-color-tertiary"
            >@wellthetroll</span
          >
        </div>
      </div>
      <div class="flex items-center gap-1">
        <span class="font-normal font-sans text-xxs text-color-tertiary"
          >2:23 pm</span
        >
        <span class="font-normal font-sans text-xxs text-color-tertiary"
          >Feb 14 2023</span
        >
      </div>
    </div>
    <p class="font-normal font-sans text-base text-text">
      My forehead is so big from all the disrespectful thoughts that I keep to
      myself.
    </p>
    <div class="w-full">
      <div class="w-full h-0.5 bg-secondary"></div>
      <div class="flex flex-col gap-1 mt-4">
        <div class="flex items-center gap-2">
          <img src="@/assets/green-checkmark.svg" alt="Green Checkmark" />
          <span class="font-semibold font-sans text-xxs text-color-tertiary"
            >Fact Check Passed</span
          >
        </div>
        <span class="font-semibold font-sans text-xxs text-color-tertiary"
          >It appears that it is true. Well, what can we say? The bigger the
          better, right?</span
        >
      </div>
    </div>
  </div>
</template>
