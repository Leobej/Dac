import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { getBackendURL, getSignUpPath } from "../utils/helpers";

//create a signup function
export const SignUpHelper = (user, successHandler, errorHandler) => {
  return fetch(`${getBackendURL()}${getSignUpPath()}`, {
    method: "POST",
    //add cors to headers
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },

    body: JSON.stringify(user),
  })
    .then((response) => {
      successHandler();
    })
    .catch((error) => {
      errorHandler(error);
    });
};
