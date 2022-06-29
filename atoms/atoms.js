import { atom } from "recoil";

export const AuthState = atom({
  key: "auth",
  default: JSON.parse(localStorage.getItem(key)) || {},
});

export const userAtom = atom({
  key: "user",
  default: null,
});
