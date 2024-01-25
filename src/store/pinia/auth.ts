import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
      email: '',
      password:'',
      isLogin: false,
    }),
    
    actions: {
      login(email:string, password:string){
        this.isLogin = true;
        this.email = email;
        this.password = password;
      }
    },
  });