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
      const user = JSON.parse(localStorage.getItem("user") ?? "{}");
      if (user) {
        this.email = user.email;
        this.roles = user.roles;
        this.uid = user.uid;
        this.createdAt = user.createdAt;
        this.username = user.username;
        this.updatedAt = user.updatedAt;
        this.avatar = user.avatar;
      } else {
        this.email = "";
        this.roles = [];
        this.uid = "";
        this.createdAt = "";
        this.username = "";
        this.updatedAt = "";
        this.avatar = "";
      }
      return user;
    },
  },

  actions: {
    setUser(user: UsersDataType) {
      this.email = user.email;
      this.roles = user.roles;
      this.uid = user.uid;
      this.createdAt = user.createdAt;
      this.username = user.username;
      this.updatedAt = user.updatedAt;
      this.avatar = user.avatar;
      localStorage.setItem("user", JSON.stringify(user));
    },

    removeUser() {
      this.email = "";
      this.roles = [];
      this.uid = "";
      this.createdAt = "";
      this.username = "";
      this.updatedAt = "";
      this.avatar = "";
      localStorage.removeItem("user");
    },
  },
});
