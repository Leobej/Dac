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

const itemData = [
<<<<<<< Updated upstream
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    category: "roti",
    author: "@bkristastucchio",
    rows: 3,
    cols: 4,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    category: "roti",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    category: "roti",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    category: "roti",
    author: "@nolanissac",
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    category: "vopsea",
    author: "@hjrc33",
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    category: "vopsea",
    author: "@arwinneil",
    rows: 2,
    cols: 4,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    category: "vopsea",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    category: "vopsea",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    category: "motor",
    author: "@silverdalex",
    rows: 2,
    cols: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    category: "motor",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    category: "motor",
    author: "@southside_customs",
    cols: 4,
  },
];
const successHandler = (data) => {
  console.log(data);
};
const errorHandler = (error) => {
  console.log(error);
};
=======
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      category:"roti",
      id:1,
      description: '@bkristastucchio',
      price:10,

    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      category:"roti",
      id:2,
      description: '@rollelflex_graphy726',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      category:"roti",
      id:3,
      description: '@helloimnik',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      category:"roti", 
       id:4,
       description: '@nolanissac',
       price:10,
      
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      category:"vopsea",
      id:5,
      description: '@hjrc33',
      price:10,

    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      category:"vopsea",
      id:6,
      description: '@arwinneil',
      price:10,
     
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      category:"vopsea",
      id:7,
      description: '@tjdragotta',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      category:"vopsea",
      id:8,
      price:10,
      description: '@katie_wasserman',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      category:"motor",
      id:9,
      description: '@silverdalex',
      price:10,
     
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      category:"motor",
      id:10,
      description: '@shelleypauls',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      category:"motor",
      id:11,
      description: '@peterlaster',
      price:10,
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      category:"motor",
      id:12,
      description: '@southside_customs',
      price:10,
  
    },
  ];



>>>>>>> Stashed changes

export default function BasicTable() {
  React.useEffect(() => {
    GetAllServices(successHandler, errorHandler);
  }, []);

  const clickHandler = (event) => {
    console.log(event.currentTarget.title);
  };
  return <TitlebarImageList itemData={itemData}></TitlebarImageList>;
}
