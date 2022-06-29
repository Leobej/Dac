import { useRecoilState } from "recoil";
import { getBackendURL, getSignUpPath, getSignInPath } from "../utils/helpers";

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

//create a sign in method with jwt token
export const SignInHelper = async (user, successHandler, errorHandler) => {
  const response = await fetch(`${getBackendURL()}${getSignInPath()}`, {
    method: "POST",
    //add cors to headers
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },

    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (response.ok) {
    successHandler(data);
  } else {
    errorHandler(data);
  }
};
