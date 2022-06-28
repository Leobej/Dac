import Head from 'next/head'
import Typography from '@mui/material/Typography';
import backgroundImg from "../resources/images/download.jpg"
import Paper from '@mui/material/Paper';
const styles = {
  paperContainer: {
      backgroundImage: `url(${backgroundImg})`,
      height: 1932,
    
      

  },
}

function IndexPage() {
  return (
    <>
    <div>
    <Head>
        <title>Servis La vericu</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Typography fontStyle={"oblique"} fontFamily={"fantasy"} align='center' color={"black"} variant='h1' >Servis La Vericu</Typography>
    
   

    </div>
    <Paper style={styles.paperContainer}></Paper>
    </>
  )
}

export default IndexPage