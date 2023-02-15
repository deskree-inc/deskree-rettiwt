<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex w-full gap-2">
      <img
        src="https://i.pravatar.cc/32"
        alt="avatar"
        class="rounded-full w-8 h-8"
      />

      <textarea
        class="w-full ml-2 bg-transparent outline-none placeholder:text-secondary break-words resize-none p-1"
        placeholder="What's on your mind?"
      />

      <div class="w-48">
        <button
          class="bg-primary py-1.5 px-4 rounded-3xl hover:bg-primary-hover transition-colors duration-200 ease-in-out"
        >
          Share Tweet
        </button>
      </div>
    </div>
    <div class="w-full h-0.5 mt-3 mb-7 bg-secondary"></div>
  </div>
</template>
