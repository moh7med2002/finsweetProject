import Head from 'next/head'
import FeaturesTwo from '../../components/Home/FeaturesTwo'
import ProductHeader from '../../components/Product/Header'
import LeadGeneration from '../../components/Product/LeadGeneration'
import Marketing from '../../components/Product/Marketing'
import ProductFeatures from '../../components/Product/ProductFeatures'
import RemoteTeams from '../../components/Product/RemoteTeams'
import TimeTracker from '../../components/Product/TimeTracker'
export default function Product(){
    return(
        <div className='pt-[71px]'>
            <Head>
                <title>Product Page</title>
                <meta name='descrption' content='product show page'/>
            </Head>
            <ProductHeader/>
            <ProductFeatures/>
            <Marketing/>
            <TimeTracker/>
            <LeadGeneration/>
            <RemoteTeams/>
            <FeaturesTwo/>
        </div>
    )
}