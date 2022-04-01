import FAQParent from "../../components/Pricing/FAQParent";
import LandPrice from "../../components/Pricing/LandPricing";
import Head from 'next/head'
export default function Pricing(){
    return(
        <div className="pt-[71px]">
            <Head>
                <title>Pricing Page</title>
                <meta name="description" content="pricing page"/>
            </Head>
            <LandPrice/>
            <FAQParent/>
        </div>
    )
}