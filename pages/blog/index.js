import AllPost from "../../components/Blog/AllPost";
import BlogHeader from "../../components/Blog/HeaderBlog";
import Head from 'next/head'

export default function Blog(){
    return(
        <div className="pt-[71px]">
            <Head>
                <title>Blog Page</title>
                <meta name="description" content="blog page"/>
            </Head>
            <BlogHeader/>
            <AllPost/>
        </div>
    )
}