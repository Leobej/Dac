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

export default function TitlebarImageList(props) {
  const router = useRouter();

  const clickHandler = (event) => {
    const servicesId = event;
    router.push(`${"/" + servicesId}`);
  };

  // const filterByCategory = (filteredData) => {
  //   const filteredItems = filteredData.filter(
  //     (item) => item.idCategories.name === "vopsea"
  //   );
  //   return filteredItems;
  // };

  // const filteredList = filterByCategory(props.itemData);
  return (
    <ImageList sx={{ mt: "5%", ml: "15%", width: "70%", heigh: "100%" }}>
      <ImageListItem key="Subheader">{"smth"}</ImageListItem>
      <CustomImageListItem itemData={props.itemData}>

      </CustomImageListItem>
    </ImageList>
  );
}
