import { ImageListItem } from "@mui/material";
import { ImageListItemBar } from "@mui/material";
import { Blob } from "buffer";

const CustomImageListItem = (props) => {
  return (
    <>
      {props.itemData.map((item, index) => (
        <ImageListItem
          key={item.id}
          onClick={() => {
            clickHandler(item.id);
          }}
        >
          <img src={`data:image/jpeg;base64,${item.idPictures[0].data}`} />
          <ImageListItemBar
            title={item.name}
            subtitle={
              item.priceService == null ? "free" : item.priceService.price
            }
          />
        </ImageListItem>
      ))}
    </>
  );
};

export default CustomImageListItem;
