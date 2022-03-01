import '../styles/globals.css'
import Navbar from '../components/Navbar';
// import '../styles/style.css'
function MyApp({ Component, pageProps }) {
  console.log("i am loading");
  return <>
  <Navbar></Navbar>
  <Component {...pageProps} />
  </>
}

export default MyApp
