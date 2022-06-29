import { ImageListItem } from "@mui/material";
import { ImageListItemBar } from "@mui/material";
const CustomImageListItem = (props) => {
  return (
    <>
      {props.itemData
        .filter((item) => item.category === "motor")
        .map((item, index) => (
          <ImageListItem
            key={item.img}
            onClick={() => {
              clickHandler(item.id);
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.price}
            //   classes={{
            //     root: classes.titleBar,
            //     title: classes.title,
            //   }}
            />
          </ImageListItem>
        ))}
      ;
    </>
  );
};

export default CustomImageListItem;
