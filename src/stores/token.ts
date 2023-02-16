import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    refreshToken: "",
  }),

  getters: {
    getToken() {
      const token = localStorage.getItem("token") || "";
      if (token !== "") {
        this.token = token;
      } else {
        this.token = "";
      }
      return token;
    },
    getRefreshToken() {
      const refreshToken = localStorage.getItem("refreshToken") || "";
      if (refreshToken !== "") {
        this.refreshToken = refreshToken;
      } else {
        this.refreshToken = "";
      }
      return refreshToken;
    },
  },

  actions: {
    setToken(token: string, refreshToken: string) {
      this.token = token;
      this.refreshToken = refreshToken;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
    },

    removeToken() {
      this.token = "";
      this.refreshToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
});
