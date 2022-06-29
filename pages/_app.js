import React from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </RecoilRoot>
  );
}

export default MyApp;
