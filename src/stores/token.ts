import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    tokens: useStorage("tokens", {
      token: "",
      refreshToken: "",
    }),
  }),

  getters: {
    getToken(): { token: string; refreshToken: string } {
      return this.tokens;
    },
  },

  actions: {
    setToken(token: string, refreshToken: string) {
      this.tokens.token = token;
      this.tokens.refreshToken = refreshToken;
    },

    removeToken() {
      this.tokens.token = "";
      this.tokens.refreshToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});
