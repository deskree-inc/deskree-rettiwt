<script setup lang="ts">
import { watchEffect } from "vue";
import { RouterView } from "vue-router";

watchEffect(() => {
  RouterView;
});
</script>

<template>
  <RouterView />
</template>
