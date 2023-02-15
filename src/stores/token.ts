import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    refreshToken: "",
  }),

  getters: {
    getToken() {
      this.token = localStorage.getItem("token") || "";
    },
    getRefreshToken() {
      this.refreshToken = localStorage.getItem("refreshToken") || "";
    },
  },

  actions: {
    setToken(token: string, refreshToken: string) {
      this.token = token;
      this.refreshToken = refreshToken;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
    },
  },
});
