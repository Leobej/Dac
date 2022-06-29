import { atom } from "recoil";

export const AuthState = atom({
  key: "user",
  //default from memory
  default: {},
});
