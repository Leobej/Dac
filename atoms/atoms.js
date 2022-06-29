import { atom } from "recoil";

export const AuthState = atom({
  key: "",
  //default from memory
  default: {},
});

export const userAtom = atom({
  key: "user",
  default: null,
});
