import { defineStore } from "pinia";
import type { UsersDataType } from "../interfaces/deskree-types.interface";

export const useUserStore = defineStore("user", {
  state: (): UsersDataType => ({
    email: "",
    roles: [],
    uid: "",
    createdAt: "",
    username: "",
    updatedAt: "",
    avatar: "",
  }),

  getters: {
    getUser(): UsersDataType {
      return JSON.parse(localStorage.getItem("user") || "{}");
    },
  },

  actions: {
    setUser(user: UsersDataType) {
      console.log("user", user);
      this.email = user.email;
      this.roles = user.roles;
      this.uid = user.uid;
      this.createdAt = user.createdAt;
      this.username = user.username;
      this.updatedAt = user.updatedAt;
      this.avatar = user.avatar;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
});
