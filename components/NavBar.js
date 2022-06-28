import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function NavBar(props) {
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

          <Link href="/SignIn">
            <Button color="inherit">Login</Button>
          </Link>

          <Link href="/SignUp">
            <Button color="inherit">Sign Up</Button>
          </Link>
          <Link href="/Services">
            <Button color="inherit">Services</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
