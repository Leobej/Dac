import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { styled } from "@mui/material";
import CustomImageListItem from "./CustomImageListItem";



const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function TitlebarImageList(props) {
  const classes = useStyles();
  const router = useRouter();

  const clickHandler = (event) => {
    const servicesId = event;
    router.push(`${"/" + servicesId}`);
  };

  const filterByCategory = (filteredData) => {
    
    const filteredItems = filteredData.filter((item) => item.category === "vopsea");
    return filteredItems;
  };

  const filteredList = filterByCategory(props.itemData);


  return (
    <ImageList sx={{ mt: "5%", ml: "15%", width: "70%" }}>
      <ImageListItem key="Subheader" cols={4} className={classes.imageList}>
        {" "}
        <h1>{filteredList[2].category}</h1>
      </ImageListItem>
    <CustomImageListItem itemData={props.itemData}></CustomImageListItem>
    </ImageList>
  );
}
