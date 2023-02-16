<script setup lang="ts">
import { ref } from "vue";

import { deskree, options } from "@/deskree";

import { useUserStore } from "@/stores/user";
import { useTokenStore } from "@/stores/token";
import router from "@/router";

import LoadingWidgetVue from "./LoadingWidget.vue";

const loginUserObject = ref({
  email: "",
  password: "",
});

const isLoading = ref(false);

async function loginUser() {
  try {
    isLoading.value = true;
    const login = await deskree
      .auth()
      .signInEmail(loginUserObject.value.email, loginUserObject.value.password);
    options["userToken"] = login.data.idToken;
    const user = await deskree
      .database()
      .from("users")
      .getByUID(login.data.uid);
    user["data"]["data"]["uid"] = login.data.uid;
    useUserStore().setUser(user.data.data);
    useTokenStore().setToken(login.data.idToken, login.data.refreshToken);
    router.replace({ name: "home" });
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div
    class="h-screen w-screen bg-background py-7 px-12 mobile:py-0 mobile:px-0 relative overflow-hidden"
  >
    <div
      class="h-screen w-1/4 mobile:w-full mobile:px-4 max-w-md my-36 mx-auto mobile:my-0 mobile:mx-0 mobile:flex mobile:flex-col mobile:justify-center"
    >
      <div class="flex items-center gap-2 mb-8">
        <img src="@/assets/logo.svg" alt="logo" class="w-11" />
        <h4 class="font-sans font-bold text-white text-3xl">rettiwt</h4>
      </div>
      <p class="font-sans text-white text-xs font-normal mb-6">
        Welcome to Rettiwt. <br />Please provide the credentials below to login.
      </p>
      <form class="flex flex-col gap-4 w-full" @submit.prevent="loginUser">
        <input
          v-model="loginUserObject.email"
          type="email"
          placeholder="Email Address"
          required
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-white focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <input
          v-model="loginUserObject.password"
          type="password"
          placeholder="Password"
          required
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-white focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <button
          type="submit"
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isLoading"
        >
          <LoadingWidgetVue v-if="isLoading" />
          <span v-else>Login</span>
        </button>
      </form>
      <div class="w-full h-0.5 my-7 bg-secondary"></div>
      <p class="font-sans text-white text-xs font-normal mb-4">
        If you are new to the platform, please register.
      </p>
      <RouterLink to="/register" class="w-full">
        <button
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-[#4d4d4d] text-white hover:bg-background-secondary transition-colors duration-200 ease-in-out"
          :disabled="isLoading"
        >
          Register New Account
        </button>
      </RouterLink>
    </div>
  </div>
</template>
