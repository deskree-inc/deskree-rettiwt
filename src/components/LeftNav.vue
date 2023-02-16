<script setup lang="ts">
import { useTokenStore } from "@/stores/token";
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const user = computed(() => useUserStore().$state);

const logout = () => {
  useUserStore().removeUser();
  useTokenStore().removeToken();
};
</script>

<template>
  <div class="col-span-1 h-screen mobile:hidden w-full flex justify-end pt-1">
    <div class="max-w-[160px] mr-6">
      <div class="flex items-center justify-center gap-2">
        <img src="@/assets/logo.svg" alt="logo" />
        <h4 class="font-sans font-bold text-white">rettiwt</h4>
      </div>
      <div
        class="min-h-min w-40 p-4 bg-background-secondary rounded-xl flex flex-col mt-[68px] gap-4"
      >
        <div v-if="user.uid && user.email" class="flex items-center gap-3">
          <img :src="user.avatar" alt="avatar" class="rounded-full w-6 h-6" />
          <div class="flex flex-col">
            <h4 class="font-normal font-sans text-sm text-white">
              {{ user.username }}
            </h4>
            <span class="font-normal font-sans text-xxs text-color-tertiary"
              >@{{ user.username }}</span
            >
          </div>
        </div>
        <div class="flex flex-col items-start gap-3">
          <nav class="flex items-center gap-4">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.44009 0.153336C6.78553 -0.0511118 7.21447 -0.051112 7.55991 0.153336L13.4583 3.64427C13.794 3.84296 14 4.20479 14 4.59572V12.8952C14 13.5054 13.5068 14 12.8984 14H10.0525C9.44404 14 8.95082 13.5054 8.95082 12.8952V10.5936C8.95082 9.98343 8.4576 9.4888 7.84918 9.4888H6.24262C5.6342 9.4888 5.14098 9.98343 5.14098 10.5936V12.8952C5.14098 13.5054 4.64776 14 4.03934 14H1.10164C0.493219 14 -9.53674e-07 13.5054 -9.53674e-07 12.8952V4.59572C-9.53674e-07 4.20478 0.206012 3.84296 0.541726 3.64427L6.44009 0.153336Z"
                fill="#0075FF"
              />
            </svg>

            <span class="font-sans font-semibold text-xs pt-0.5 text-primary"
              >Home</span
            >
          </nav>
          <div class="bg-small-divider w-full h-0.5"></div>
          <nav class="flex items-center gap-4 group">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.32955 0.0661191C7.7983 0.253891 8.02202 0.785538 7.83736 1.25385L7.44673 2.23285H10.8842L11.5483 0.573682C11.7365 0.105368 12.2656 -0.122098 12.7308 0.0661191C13.1996 0.253891 13.4233 0.785538 13.2386 1.25385L12.848 2.23285H14.0909C14.5916 2.23285 15 2.64184 15 3.14628C15 3.45716 14.8438 3.73145 14.6058 3.89648C14.4602 3.99951 14.2827 4.05972 14.0909 4.05972H12.1165L10.6605 7.71346H11.8182C12.3189 7.71346 12.7273 8.12245 12.7273 8.62689C12.7273 8.77541 12.6918 8.91546 12.6314 9.03945C12.5675 9.16523 12.4751 9.2745 12.3615 9.35835C12.2088 9.47253 12.0206 9.54033 11.8182 9.54033H9.92898L9.17614 11.4265C8.98793 11.8948 8.45881 12.1219 7.99361 11.9341C7.67756 11.8079 7.47514 11.5251 7.42898 11.2111C7.40767 11.059 7.42543 10.8993 7.4858 10.7463L7.96875 9.54033H4.5277L3.77486 11.4265C3.58665 11.8948 3.05753 12.1219 2.59233 11.9341C2.38991 11.8529 2.23366 11.708 2.13423 11.5318C2.05611 11.3913 2.01705 11.2307 2.0206 11.067C2.0206 10.96 2.0419 10.8516 2.08452 10.7463L2.56747 9.54033H0.909091C0.408381 9.54033 0 9.13133 0 8.62689C0 8.12245 0.408381 7.71346 0.909091 7.71346H3.29545L4.75497 4.05972H3.18182C2.90128 4.05972 2.6456 3.92993 2.47869 3.72655C2.35085 3.56866 2.27273 3.36662 2.27273 3.14628C2.27273 2.64184 2.68111 2.23285 3.18182 2.23285H5.48295L6.14702 0.573682C6.25 0.314102 6.45952 0.128115 6.70455 0.0464945C6.90341 -0.0190694 7.12358 -0.0177314 7.32955 0.0661191ZM8.69673 7.71346L10.1562 4.05972H6.7152L5.25923 7.71346H8.69673Z"
                fill="#D9D9D9"
                class="group-hover:fill-primary transition-colors duration-200 ease-in-out"
              />
            </svg>
            <span
              class="font-sans font-semibold text-xs pt-0.5 text-white group-hover:text-primary transition-colors duration-200 ease-in-out"
              >Trending</span
            >
          </nav>
          <div class="bg-small-divider w-full h-0.5"></div>
          <nav class="flex items-center gap-4 group">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 1.5H11.792C11.4062 0.617035 10.5252 0 9.5 0C8.47484 0 7.5938 0.617035 7.20802 1.5H1C0.447716 1.5 0 1.94772 0 2.5C0 3.05228 0.447716 3.5 1 3.5H7.20802C7.5938 4.38297 8.47484 5 9.5 5C10.5252 5 11.4062 4.38297 11.792 3.5H13C13.5523 3.5 14 3.05228 14 2.5C14 1.94772 13.5523 1.5 13 1.5ZM1 8.5C0.447716 8.5 0 8.94772 0 9.5C0 10.0523 0.447716 10.5 1 10.5H2.20802C2.5938 11.383 3.47484 12 4.5 12C5.52516 12 6.4062 11.383 6.79198 10.5H13C13.5523 10.5 14 10.0523 14 9.5C14 8.94772 13.5523 8.5 13 8.5H6.79198C6.4062 7.61703 5.52516 7 4.5 7C3.47484 7 2.5938 7.61703 2.20802 8.5H1Z"
                fill="#D9D9D9"
                class="group-hover:fill-primary transition-colors duration-200 ease-in-out"
              />
            </svg>

            <span
              class="font-sans font-semibold text-xs pt-0.5 text-white group-hover:text-primary transition-colors duration-200 ease-in-out"
              >Settings</span
            >
          </nav>
          <div class="bg-small-divider w-full h-0.5"></div>
          <nav class="flex items-center gap-4 group">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00007 0C6.44778 0 6.00007 0.447716 6.00007 1V7C6.00007 7.55229 6.44778 8 7.00007 8C7.55235 8 8.00007 7.55229 8.00007 7V1C8.00007 0.447716 7.55235 0 7.00007 0ZM4.19475 13.1391C3.31617 12.5436 2.64987 11.684 2.2923 10.6847C1.93472 9.68537 1.90443 8.59819 2.20579 7.5805C2.50715 6.56282 3.12453 5.66743 3.96858 5.02394L2.75602 3.43345C1.57435 4.33433 0.710006 5.58787 0.2881 7.01263C-0.133806 8.43739 -0.091387 9.95944 0.409217 11.3585C0.90982 12.7575 1.84264 13.961 3.07265 14.7947C4.30266 15.6283 5.76605 16.049 7.25101 15.9957C8.73596 15.9424 10.1654 15.418 11.3325 14.4983C12.4996 13.5786 13.3438 12.3114 13.7429 10.8801C14.1419 9.44874 14.0751 7.92756 13.5522 6.5367C13.0293 5.14584 12.0773 3.95747 10.8341 3.1436L9.73865 4.81691C10.6266 5.39825 11.3066 6.24709 11.6801 7.24055C12.0537 8.23402 12.1014 9.32058 11.8163 10.343C11.5313 11.3653 10.9283 12.2705 10.0947 12.9274C9.26103 13.5843 8.23997 13.9589 7.17929 13.997C6.11861 14.035 5.07333 13.7346 4.19475 13.1391Z"
                fill="white"
                class="group-hover:fill-primary transition-colors duration-200 ease-in-out"
              />
            </svg>

            <RouterLink
              v-if="user === undefined || user === null || user.email === ''"
              to="/login"
            >
              <span
                class="font-sans font-semibold text-xs pt-0.5 text-white group-hover:text-primary transition-colors duration-200 ease-in-out"
                >Login</span
              >
            </RouterLink>
            <span
              v-else
              class="font-sans font-semibold text-xs pt-0.5 text-white group-hover:text-primary transition-colors duration-200 ease-in-out"
              @click="logout()"
              >Logout</span
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
