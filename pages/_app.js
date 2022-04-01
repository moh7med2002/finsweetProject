import Footer from '../components/Footer'
import GlobalCTA from '../components/GlobalCTA'
import Nav from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps} />
      <GlobalCTA/>
      <Footer/>
    </div>
  )
}

export default MyApp
