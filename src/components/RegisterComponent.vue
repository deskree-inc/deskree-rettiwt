<script setup lang="ts">
import { ref } from "vue";

const avatarFile = ref<File | null>(null);

const registerUserObject = ref({
  username: "",
  email: "",
  password: "",
  avatar: avatarFile.value,
});
</script>

<template>
  <div class="h-screen w-screen bg-background flex justify-center">
    <div
      class="flex flex-col items-start justify-center h-screen w-1/4 mobile:w-full mobile:px-4"
    >
      <div class="flex items-center justify-center gap-2 mb-8">
        <img src="@/assets/logo.svg" alt="logo" class="w-11" />
        <h4 class="font-sans font-bold text-white text-3xl">rettiwt</h4>
      </div>
      <p class="font-sans text-white text-xs font-normal mb-6">
        Welcome to Rettiwt. <br />Please provide the credentials below to
        register.
      </p>
      <form class="flex flex-col gap-4 w-full" @submit.prevent="">
        <input
          v-model="registerUserObject.username"
          type="text"
          placeholder="Username"
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-white focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <input
          v-model="registerUserObject.email"
          type="email"
          placeholder="Email Address"
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-white focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <input
          v-model="registerUserObject.password"
          type="password"
          placeholder="Password"
          class="w-full relative gap-2 px-4 py-2 rounded-lg bg-[#292929] text-white focus:outline-none focus:ring-2 focus:ring-primary hover:bg-[#4d4d4d] transition-colors duration-200 ease-in-out"
        />
        <div
          v-if="avatarFile === null"
          class="flex justify-start items-center w-full relative gap-2 px-4 py-2 rounded-lg border border-[#0075ff] border-dashed cursor-pointer hover:bg-background-secondary focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200 ease-in-out"
          @click="$refs.fileInput?.click(avatarFile)"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-2.5 h-2.5 relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M5.00244 10C4.738 10 4.48432 9.89529 4.29688 9.70876C4.10943 9.52223 4.00348 9.26906 4.0022 9.00462V1.00024C4.0022 0.734962 4.10758 0.480546 4.29516 0.292964C4.48274 0.105382 4.73716 0 5.00244 0C5.26772 0 5.52214 0.105382 5.70972 0.292964C5.8973 0.480546 6.00268 0.734962 6.00268 1.00024V9.00462C6.0014 9.26906 5.89545 9.52223 5.708 9.70876C5.52056 9.89529 5.26688 10 5.00244 10V10Z"
              fill="#0075FF"
            ></path>
            <path
              d="M3.05009e-07 5.00122C-2.82594e-06 4.73678 0.104712 4.4831 0.291242 4.29566C0.477773 4.10821 0.73094 4.00226 0.995377 4.00098L8.99976 4.00098C9.26504 4.00098 9.51945 4.10636 9.70704 4.29394C9.89462 4.48152 10 4.73594 10 5.00122C10 5.2665 9.89462 5.52092 9.70704 5.7085C9.51945 5.89608 9.26504 6.00146 8.99976 6.00146H0.995377C0.73094 6.00018 0.477773 5.89423 0.291242 5.70678C0.104712 5.51934 -2.82594e-06 5.26566 3.05009e-07 5.00122V5.00122Z"
              fill="#0075FF"
            ></path>
          </svg>
          <p class="text-xs text-left text-white">
            Add an avatar for your profile
          </p>
          <input
            @change="avatarFile = $event.target?.files[0]"
            ref="fileInput"
            type="file"
            class="hidden"
            accept="image/png, image/gif, image/jpeg, image/ico, image/jpg"
          />
        </div>
        <div
          v-else-if="avatarFile !== null"
          class="flex justify-start items-center w-full relative gap-2 px-4 py-2 rounded-lg border border-[#0075ff] border-dashed"
        >
          <div class="flex items-center justify-between w-full">
            <p class="text-xs text-left text-white">
              {{ avatarFile.name }}
            </p>
            <span
              class="cursor-pointer text-primary text-xs hover:text-primary-hover transition-colors duration-200 ease-in-out"
              @click="$refs.fileInput?.click()"
              >Change</span
            >
          </div>
          <input
            @change="avatarFile = $event.target?.files[0]"
            ref="fileInput"
            type="file"
            class="hidden"
            accept="image/png, image/gif, image/jpeg, image/ico, image/jpg"
          />
        </div>
        <button
          type="submit"
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover focus:outline-none focus:ring-1 focus:ring-white transition-colors duration-200 ease-in-out"
        >
          Register
        </button>
        <label class="text-[#8e8e8e] text-xxs"
          >Must be between 6 to 10 characters long.</label
        >
      </form>
      <!--Divider-->
      <div class="w-full h-0.5 my-7 bg-secondary"></div>
      <p class="font-sans text-white text-xs font-normal mb-4">
        If you are already a registered user, please login.
      </p>
      <RouterLink to="/login" class="w-full">
        <button
          class="flex justify-center items-start w-full relative gap-2 px-4 py-2 rounded-lg bg-[#4d4d4d] text-white hover:bg-background-secondary transition-colors duration-200 ease-in-out"
        >
          Go To Login
        </button>
      </RouterLink>
    </div>
  </div>
</template>
