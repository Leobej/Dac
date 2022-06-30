import * as React from "react";
import TitlebarImageList from "../components/TitleBarImageList";
import { GetAllServices } from "../_actions/UserActions";

function createData(name, description, price, time, category) {
  return { name, description, price, time, category };
}

//use effect to fetch data from the server

const tempArr = [
  createData("Schimbare roti", "12312", 100, 24, "cat"),
  createData("Vopsire", "12312", 500, 200, 4.3),
  createData("Schimb ulei", "32", 400, 60, 6.0),
  createData("alt schimb ulei", "305", 200, 60, 4.3),
  createData("inca un schimb de ulei", "12323213", 60, 49, 3.9),
];

const errorHandler = (error) => {
  console.log(error);
};

export default function BasicTable() {
  const [itemData, setItemData] = React.useState([]);

  React.useEffect(() => {
    GetAllServices(errorHandler).then((data) => {
      console.log(data);
      setItemData(data);
    });
  }, []);

  const clickHandler = (event) => {
    console.log(event.currentTarget.title);
  };
  return <TitlebarImageList itemData={itemData}></TitlebarImageList>;
}
