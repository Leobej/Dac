import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggInState } from "../atoms/atoms";
import { ShoppingCart } from "@mui/icons-material";
import { counterValue } from "../selector/selector";

export default function NavBar(props) {
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  const contor = useRecoilValue(counterValue);
  const clickHandler = () => {
    event.preventDefault();

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
            Button
          </Button>
          <Button sx={{ ml:"70%" }} color="inherit">
            <ShoppingCart></ShoppingCart>
            <Typography>{contor}</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
