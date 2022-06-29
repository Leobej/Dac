import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLoggInState } from "../atoms/atoms";



export default function NavBar(props) {
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  const clickHandler = () => {
    event.preventDefault();
    console.log("pl negro");
    setIsLoggedInState(!isLoggedInState);
  };
  // const isLoggedIn = useRecoilState(isLoggInState);
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Link href="/">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Link>

          {!isLoggedInState ? (
            <>
              <Link href="/SignIn">
                <Button color="inherit">Login</Button>
              </Link>

              <Link href="/SignUp">
                <Button color="inherit">Sign Up</Button>
              </Link>
            </>
          ) : null}
          <Link href="/Services">
            <Button color="inherit">Services</Button>
          </Link>
          <Button color="inherit" onClick={clickHandler}>
            {" "}
            buton borat
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
