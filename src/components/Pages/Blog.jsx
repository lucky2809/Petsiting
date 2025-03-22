import React from 'react'
import BlogData from "../data/Blogdata.json"

const newCardData = BlogData.CurrentBlog

function Blog() {
    return (
        <>
            <div className='Card-main border border-black w-full px-20 mt-10  mb-10 bg-slate-100 py-5 border-none'>
                <div className='flex justify-between py-3'>
                    <p className=' text-2xl font-semibold'>Blogs</p>
                    <button className='flex justify-center text-center border-1 items-center px-3 p-2 bg-green-700 text-white hover:bg-green-950'>View More ..</button>
                </div>
                <div className='grid grid-cols-3 gap-5 bg-gray-200'>
              {
                newCardData.map((data) =>{
                    return (
                        <section className='card-data bg-white shadow-xl transition-transform hover:shadow-2xl hover:translate-x-1 duration-400'>
                        <div className='h-96'>
                            <img className='h-full w-full object-cover ' src={data.img} />
                        </div>
                        <div className='flex flex-col gap-5 mb-3 px-2'>
                            <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-xl px-2'>{data.heading}</h1>
                            <p className='font-semibold text-md px-2 text-slate-600'>{data.description}</p>
                            </div>
                            <span className='font-semibold text-sm px-2 text-slate-600 '>Pet Care <span>. {data.postData}</span> </span>
    
                        </div>
                    </section>
                    )
                })
              }
</div>
            </div>

        </>
    )
}

export default Blog