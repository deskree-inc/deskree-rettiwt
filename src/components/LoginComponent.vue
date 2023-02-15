<script setup lang="ts">
import { ref } from "vue";

const loginUserObject = ref({
  email: "",
  password: "",
});
</script>

<template>
  <div class="h-screen w-screen bg-background flex justify-center">
    <div
      class="flex flex-col items-start justify-center h-screen w-1/4 mobile:w-full mobile:px-4"
    >
      <div class="flex items-center justify-center gap-2 mb-8">
        <img src="@/assets/logo.svg" alt="logo" class="w-11" />
        <h4 class="font-sans font-bold text-text text-3xl">rettiwt</h4>
      </div>
      <p class="font-sans text-text text-xs font-normal mb-6">
        Welcome to Rettiwt. <br />Please provide the credentials below to login.
      </p>
      <form class="flex flex-col gap-4 w-full" @submit.prevent="">
        <input
          v-model="loginUserObject.email"
          type="email"
          placeholder="Email Address"
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-text focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <input
          v-model="loginUserObject.password"
          type="password"
          placeholder="Password"
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-text focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <button
          type="submit"
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-primary text-text hover:bg-primary-hover focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200 ease-in-out"
        >
          Login
        </button>
      </form>
      <!--Divider-->
      <div class="w-full h-0.5 my-7 bg-secondary"></div>
      <p class="font-sans text-text text-xs font-normal mb-4">
        If you are new to the platform, please register.
      </p>
      <RouterLink to="/register" class="w-full">
        <button
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-[#4d4d4d] text-text hover:bg-background-secondary transition-colors duration-200 ease-in-out"
        >
          Register New Account
        </button>
      </RouterLink>
    </div>
  </div>
</template>
