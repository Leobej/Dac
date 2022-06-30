import { atom, selector } from "recoil";

export const AuthState = atom({
  key: "user",
  //default from memory
  default: {},
});

export const ShoppingCartItems = atom({
  key: "list",
  default: [],
});

export const ShoppingCartPrice = selector({
  key: "price",
  get: ({ get }) => {
    let price = 0;
    const list = get(ShoppingCartItems);
    list.map((item) => {
      price += item.priceService != null ? parseInt(item.priceService) : 0;
    });
    return price;
  },
});
