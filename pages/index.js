import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Home/Features'
import {quality} from '../data/Quality'
import LandingHome from '../components/Home/LandingHome'
import styles from '../styles/Home.module.css'
import Whyus from '../components/Home/Whyus'
import CTA from '../components/Home/CTA'
import Logos from '../components/Home/Logos'
import Discover from '../components/Home/Discover'
import FeaturesTwo from '../components/Home/FeaturesTwo'
import Testimonials from '../components/Home/Testimonials'



export default function Home() {
  
  return (
    <div className="pt-[71px]">
      <Head>
        <title>Home Page</title>
        <meta name='description' content='home page'/>
      </Head>
      <LandingHome/>
      <Features quality={quality}/>
      <Whyus/>
      <CTA/>
      <Logos/>
      <Discover/>
      <FeaturesTwo/>
      <Testimonials/>
    </div>
  )
}
