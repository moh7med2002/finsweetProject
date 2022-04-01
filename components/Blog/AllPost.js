import { dataPosts } from "../../data/PostsData"
import Image from "next/image"
import { useRouter } from "next/router"
export default function AllPost(){
    let router=useRouter()
    let postsJsx=dataPosts.map(da=>{
        return(
            <div key={da.id + 100} className=" shadow rounded-2xl" onClick={()=> router.push(`/blog/${da.id}`)}>
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
    return(
        <div className="py-[50px]">
            <div className="container px-6">
                <h2 className="text-center font-bold text-mainBlack text-[32px] sm:text-[56px]">
                    All posts</h2>
                <div className="mt-[40px] grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9">
                    {postsJsx}
                </div>
            </div>
        </div>
    )
}