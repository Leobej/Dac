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
import { ShoppingCart } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { ShoppingCartItems } from "../atoms/atoms";
import { useRouter } from "next/router";

export default function NavBar(props) {
  const router = useRouter();
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartItems);
  let finalPrice = 0;
  shoppingCart.forEach((item) => {
    finalPrice += item.priceService != null ? item.priceService.price : 0;
  });

  const [isLoggedInState, setIsLoggedInState] = useState(false);
  //const contor = useRecoilValue(counterValue);
  const clickHandler = (event) => {
    event.preventDefault();

    setIsLoggedInState(!isLoggedInState);
  };

  //user router to get to Cart Page
  const clickHandlerCart = (event) => {
    //add finalPrice as query for cart page
    router.push({
      pathname: "/Cart",
      query: {
        price: finalPrice,
      },
    });
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
          <Link href="/Services" prefetch={true}>
            <Button color="inherit">Services</Button>
          </Link>
          <Button color="inherit" onClick={clickHandler}>
            {" "}
            Button
          </Button>

          <Typography
          fontStyle={"oblique"}
          fontFamily={"fantasy"}
          align="center"
          color={"black"}
        sx={{ml:"22%"}}
        >
          Servis La Vericu
        </Typography>
          <Button sx={{ ml: "35%" }} color="inherit" onClick={clickHandlerCart}>
            <ShoppingCart></ShoppingCart>
            {finalPrice.toString()}
          </Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
