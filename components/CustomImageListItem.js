import { ImageListItem } from "@mui/material";
import { ImageListItemBar } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { ShoppingCartItems } from "../atoms/atoms";
import { ShoppingCartPrice } from "../atoms/atoms";

const CustomImageListItem = (props) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartItems);
  //const finalPrice = useRecoilValue(ShoppingCartPrice);
  console.log(shoppingCart);

  const addToCart = (event, item) => {
    setShoppingCart((cart) => {
      let newShoppingCart = cart.slice();
      newShoppingCart.push(item);

      return newShoppingCart;
    });
  };

  return (
    <>
      {props.itemData.map((item, index) => (
        <ImageListItem key={item.id}>
          <img src={`data:image/jpeg;base64,${item.idPictures[0].data}`} />
          <ImageListItemBar
            title={item.name}
            subtitle={
              item.priceService == null ? "free" : item.priceService.price
            }
            sx={{ display: "flex", flexDirecton: "column" }}
          />
          <IconButton
            color="primary"
            sx={{ height: "10%", width: "25%", ml: "75%" }}
            onClick={(event) => addToCart(event, item)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </ImageListItem>
      ))}
    </>
  );
};

export default CustomImageListItem;
