
import React from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
     
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
     
    </Wrapper>
  );
}

export default MyApp;
