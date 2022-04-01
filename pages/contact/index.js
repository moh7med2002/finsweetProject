import ContactForm from "../../components/Contact/ContactForm";
import Head from 'next/head'

export default function AboutUs(){
    return(
        <div className="pt-[70px]">
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="contact page"/>
            </Head>
            <ContactForm/>
        </div>
    )
}