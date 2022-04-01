import {useRouter} from 'next/router'
import { dataPosts } from '../../data/PostsData';
import Image from 'next/image';
import { useState, useEffect} from 'react';
import Head from 'next/head'
export default function BlogId(){
    let[isLoad,setIsLoad]=useState(false)
    let router=useRouter();
    let selectedBox=[]
    useEffect(()=>{
        if(selectedBox.length!==0){
            setIsLoad(true)
        }
    },[selectedBox])
    let{blogId}=router.query
    selectedBox=dataPosts.filter(post=>post.id === parseInt(blogId))

    let randomData=[];
    let[isRandomLoad,setRandomLoad]=useState(false);
    useEffect(()=>{
        if(randomData.length!==0){
            setRandomLoad(true)
        }
    },[randomData])
    function createRandomPosts(){
        let data=dataPosts.filter(post=>post.id !== parseInt(blogId));
        for(let i=0;i<3;i++){
            let random =Math.floor(Math.random()* data.length);
            randomData.push(dataPosts[random]);
        }
    }
    createRandomPosts()
    return(
        <div className="pt-[130px] py-[60px]">
            <Head>
                <title>Blog {blogId} Page</title>
                <meta name="description" content="about page"/>
            </Head>
            <div className='container px-6'>
                <h2 className='w-[768px] max-w-full mx-auto text-center  font-bold text-mainBlack text-[30px] mb-[20px] 
                leading-[120%] sm:text-[48px] sm:leading-[58px]'>
                    New invoicing features to help you get paid faster</h2>
                <p className='text-[16px] text-center font-normal text-mainBlack opacity-60 leading-[150%] mb-[30px]'>
                    Luke Matthews l  November 8, 2021</p>
                {
                    isLoad &&
                    <div>
                        <div className='text-center'>
                        <Image src={selectedBox[0].img} width={'600px'} height={'312px'} className="rounded-[24px]"/>
                        </div>
                        <h3 className='w-[768px] max-w-full mx-auto font-bold text-mainBlack text-[30px] leading-[120%] sm:text-[48px] sm:leading-[58px]
                        my-[20px]'>
                            This is a blog post headline</h3>
                        {
                            selectedBox[0].bigPost.map((p,index)=>{
                                return <p key={index+10} className="w-[768px] max-w-full mx-auto my-[20px] text-base text-mainBlack" >{p}</p>
                            })
                        }
                        <h3 className='w-[768px] max-w-full mx-auto font-bold text-mainBlack text-[30px] leading-[120%] sm:text-[48px] sm:leading-[58px]
                        my-[20px]'>This is a small blog post headline</h3>
                        {
                            selectedBox[0].smallPost.map((p,index)=>{
                                return <p key={index+22} className="w-[768px] max-w-full mx-auto my-[20px] text-base text-mainBlack" >{p}</p>
                            })
                        }
                    </div>
                }
                    <h3 className='w-[768px] max-w-full mx-auto font-bold text-mainBlack text-[30px] leading-[120%] sm:text-[48px] sm:leading-[58px]
                        my-[20px] text-center'>Read more posts</h3>
                {
                    isRandomLoad && <div className="mt-[40px] grid  sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9">
                        {
                            randomData.map((da,index)=>{
                                return(
                                    <div key={index + 1200} className=" shadow rounded-2xl" onClick={()=> router.push(`/blog/${da.id}`)}>
                                        <div className=" overflow-hidden rounded-2xl mb-[12px]">
                                            <Image src={da.img} width={"611px"} height={"456px"} 
                                            className=" rounded-2xl duration-300 hover:scale-125"/>
                                        </div>
                                        <h4 className="px-[7px] text-[22px] leading-[33.6px] font-bold text-mainBlack mb-[8px]">
                                            {da.title}</h4>
                                        <p className="px-[6px] text-base text-mainBlack font-normal opacity-[0.87]">
                                            {da.text}</p>
                                        <p className=" text-mainBlack opacity-[0.6] font-medium px-[6px] mb-[15px]">
                                            {da.date}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}