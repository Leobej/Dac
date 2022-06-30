import Head from "next/head";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import Link from "next/dist/client/link";
import Image from "next/image";

function IndexPage() {
  return (
    <>
      <div className="z-index:-1">
        <Image
          src={"/vericugpl.jpg"}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          sx={{ zIndex: "-10" }}
        />
      </div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          transitionDuration: "0.3s",
          height: "91vh",
        }}
      >
        <Head>
          <title>Servis La vericu</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
       
   
        <Link href="/Services">
          <Button
            variant="outlined"
            color="success"
            sx={{
              width: "20vh",
              height: "12vh",
              marginTop: "23vh",
              alignSelf: "center",
            }}
          >
            Magazin
          </Button>
        </Link>
        
      </Card>
    </>
  );
}

export default IndexPage;
