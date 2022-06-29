import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Router } from '@mui/icons-material';
import { useRouter } from 'next/dist/client/router';
export default function TitlebarImageList(props) {

  const router=useRouter();
  const clickHandler=(event)=>{
const servicesId =event.currentTarget.item;
router.push(`${"/"+servicesId}`);
  }
 
  return (
    <ImageList  sx={{mt:"5%",ml:"15%", width: "70%" }}>
      <ImageListItem key="Subheader" cols={4}  >
   
      </ImageListItem>
      {props.itemData.map((item) => (
        <ImageListItem 
        key={item.img}
      onClick={clickHandler}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
  
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
           
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

