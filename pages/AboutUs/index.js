import AboutHeader from "../../components/About/AboutHeader";
import About from  '../../components/About/Aboutus'
import Goals from "../../components/About/Goals";
import Teams from "../../components/About/Teams";
import Values from "../../components/About/Values";
import Head from 'next/head'
export default function AboutUs(){
    return(
        <div className="pt-[71px]">
            <Head>
                <title>About Page</title>
                <meta name="description" content="about page"/>
            </Head>
            <AboutHeader/>
            <About/>
            <Goals/>
            <Values/>
            <Teams/>
        </div>
    )
}