import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    email: "",
    password: "",
    isLogin: false,
    uid: "VSxTiwvfxWg8TBuabzbt6zFxi6M2", // hardcoded to demo
  }),

  actions: {
    login(email: string, password: string) {
      this.isLogin = true;
      this.email = email;
      this.password = password;
    },

    setUID(uid: string) {
      this.uid = uid;
      this.isLogin = true;
    },
  },
});
