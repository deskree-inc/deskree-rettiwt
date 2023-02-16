import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import type { UsersDataType } from "../interfaces/deskree-types.interface";

export const useUserStore = defineStore("user", {
  state: (): { user: UsersDataType } | any => ({
    user: useStorage("user", {
      email: "",
      roles: [],
      uid: "",
      createdAt: "",
      username: "",
      updatedAt: "",
      avatar: "",
    }),
  }),

  getters: {
    getUser(): UsersDataType {
      return this.user;
    },
  },

  actions: {
    setUser(user: UsersDataType) {
      this.user.email = user.email;
      this.user.roles = user.roles;
      this.user.uid = user.uid;
      this.user.createdAt = user.createdAt;
      this.user.username = user.username;
      this.user.updatedAt = user.updatedAt;
      this.user.avatar = user.avatar;
    },

    removeUser() {
      this.user.email = "";
      this.user.roles = [];
      this.user.uid = "";
      this.user.createdAt = "";
      this.user.username = "";
      this.user.updatedAt = "";
      this.user.avatar = "";
      localStorage.removeItem("user");
    },
  },
});
