import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { AuthState, ShoppingCartItems } from "../atoms/atoms";
import { useRecoilState } from "recoil";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { PlaceOrder } from "../_actions/UserActions";

export default function FolderList(props) {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartItems);
  const [authState, setAuthState] = useRecoilState(AuthState);

  const address = useRef();

  const onBuyHandler = (event) => {
    const order = {
      id_services: shoppingCart.map((item) => item.id),
      price: props.totalPrice,
      address: address.current.value,
    };
    console.log(JSON.stringify(order));
    PlaceOrder(order);
  };

  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 360,
        ml: "30%",
        mt: "5%",
        bgcolor: "background.paper",
      }}
    >
      {shoppingCart.map((item, index) => (
        <ListItem
          key={item.id}
          button
          onClick={() => props.clickHandler(item.id)}
          sx={{
            width: "100%",
            height: "100%",
            maxWidth: 360,
            ml: "40%",
            mt: "5%",
            bgcolor: "background.paper",
          }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                backgroundColor: "red",
              }}
            >
              <DeleteOutlineTwoToneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={item.priceService.price}
          />
        </ListItem>
      ))}

      <ListItem
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          ml: "52%",
          mt: "5%",
          bgcolor: "background.paper",
        }}
      >
        <TextField
          id="standard-multiline-static"
          sx={{
            width: "7rem",
          }}
          label="Final Price"
          value={props.totalPrice}
          inputProps={((input) => input && input.focus(), { readOnly: true })}
          variant="filled"
        />
      </ListItem>
      <ListItem
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          ml: "40%",
          mt: "5%",
          bgcolor: "background.paper",
        }}
      >
        <TextField
          id="standard-multiline-static"
          label="Your Address"
          variant="filled"
          inputRef={address}
        />
      </ListItem>
      <ListItem
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 360,
          ml: "56%",
          mt: "5%",
          bgcolor: "background.paper",
        }}
      >
        <Button variant="contained" onClick={onBuyHandler}>
          Buy
        </Button>
      </ListItem>
    </List>
  );
}
