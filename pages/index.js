import Head from "next/head";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
const stylesCard = {
  paperContainer: {
    backgroundImage: `url(../resources/images/download.jpg)`,
  },
};
const cardStyle = {};

function IndexPage() {
  return (
    <Card styles={stylesCard.paperContainer}
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
      <Typography
        fontStyle={"oblique"}
        fontFamily={"fantasy"}
        align="center"
        color={"black"}
        variant="h1"
      >
        Servis La Vericu
      </Typography>
      <Button
      
        variant="outlined"
        color="success"
        sx={{ width: "20vh",height:"12vh",marginTop:"23vh", alignSelf:"center"}}
      >
        Magazin
      </Button>
    </Card>
  );
}

export default IndexPage;
