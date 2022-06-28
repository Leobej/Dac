
import React from 'react'
import NavBar from '../components/NavBar'
function MyApp({ Component, pageProps }) {
  return (<><NavBar></NavBar><Component {...pageProps} /></>)
}

export default MyApp
