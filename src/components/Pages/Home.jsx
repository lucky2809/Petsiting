import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function Home() {
    const [toggle, setToggle] = useState(false)
    console.log(toggle)


    const currentdate = new Date()
    const date = currentdate.toDateString()
    console.log(date)
  return (
    <div className=''>
        <div  className='main flex flex-col justify-center px-35'>
    

            <div className='z-30 gap-4 relative w-full flex flex-col rounded-lg shadow-lg my-12 bg-white py-10'>
                <div className=''>
                <div className='rounded-lg flex items-center justify-around gap-4 px-10 pt-5 bg-white w-fit'>
                <button className='px-5 p-3 border-1 rounded-sm bg-white items-center flex gap-2 text-lg font-semibold'>
                    <input type="radio" name="" id="" className='w-5 h-5' />
                    Pet Boarding</button>
                    <button className='px-5 p-3 border-1 rounded-sm bg-white items-center flex gap-2 text-lg font-semibold'>
                    <input type="radio" name="" id="" className='w-5 h-5' />
                    Pet Boarding</button>
                    </div>

                </div>
                <div className='rounded-lg flex items-center gap-4 px-10  bg-white w-full'>
                    <div className='flex flex-col w-full'>
                    <label htmlFor="">Boarding Near</label>
                    <input type="address" className='px-2 border-1 text-xl py-1 w-full hover:bg-sky-100' placeholder='India' />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="">For These Days</label>
                    <div className='flex items-center gap-3'>
                    <input type="date" className='px-2 border-1 text-xl py-1 hover:bg-sky-100 ' placeholder="Drop Off"/>
                    <Icon width={30} className='text-gray-300' icon={"mynaui:arrow-right"} />
                    <input type="date" className='px-2 border-1 text-xl py-1 hover:bg-sky-100' placeholder='Pick up' />
                    </div>
                    </div>
                </div>

                <div className='px-10 flex  flex-col gap-2 w-full'>
                <p className='w-full'>How Many Pets ?</p>
                    <div className='w-full flex gap-7 items-center'>
                        <div className=' w-full flex gap-2'>
                        <button className='w-full items-center p-2 border-1 text-xl hover:bg-sky-100'>1</button>
                        <button className='w-full items-center p-2 border-1 text-xl hover:bg-sky-100'>2</button>
                        <button className='w-full items-center p-2 border-1 text-xl hover:bg-sky-100'>3+</button>
                        </div>
        
                    <div className=' w-full items-center'>
                        <button className='w-full p-2 text-lg font-semibold rounded-lg text-white bg-green-700 hover:bg-green-950' onClick={() => setToggle(!toggle)}>Get Price</button>
                    </div>
                    </div>
                </div>


                <div className=' w-full absolute -top-11 px-35'>
            <div className=' w-full flex gap-6 mt-3 items-center text-xl font-semibold p-5 px-10 rounded-lg shadow-lg  bg-white'>
                {/* <button className='px-5 p-3 border-1 rounded-sm bg-white'>Pet Boarding</button>
                <button className='px-5 p-3 border-1 rounded-sm bg-white'>Pet Boarding</button> */}
                <p>I'm looking for Service for My : </p>
                <div className='flex gap-5 items-center'>
                <input type="checkbox" className='h-5 w-5' name="" id="" />
                <p>Cat</p>
                </div>
            </div>
            </div>
            </div>

            
        </div>


        <div  className=' w-full bg-slate-100'>
                {toggle == true ? 
                            <div className='h-full px-35 flex py-10 gap-10 '>
                                <div className=' flex justify-between gap-3 p-5 w-full bg-white rounded-lg shadow-lg'>
                                    
                                    <div className='flex justify-center items-center gap-4'>
                                    <div className='dogfood h-15 w-15 flex justify-center items-center'></div>
                                    <p className=' flex justify-center text-center text-lg font-semibold'>Price With Suplies</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                    <button className='px-2 flex gap-5 items-center p-1 text-lg font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                        <div className='flex items-center'><Icon width={20} className='text-white ' icon={"mdi:rupee"} />750/-</div>
                                        <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                    </button>
                                </div>
                                </div>
                                
                                <div className=' flex justify-between gap-3 p-5 w-full bg-white rounded-lg shadow-lg'>
                                    
                                    <div className='flex justify-center items-center gap-4'>
                                    <div className='dognofood h-15 w-15 flex justify-center items-center'></div>
                                    <p className=' flex justify-center text-center text-lg font-semibold'>Price Without Suplies</p>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                    <button className='px-2 flex gap-5 items-center p-1 text-lg font-semibold rounded-lg bg-green-700 text-white hover:bg-green-950'>
                                        <div className='flex items-center'><Icon width={20} className='text-white' icon={"mdi:rupee"} />550/-</div>
                                        <div><Icon width={20} className='text-white' icon={"mingcute:arrow-right-fill"} /></div>
                                    </button>
                                </div>
                                </div>
                            </div>
                            :
                            <div></div>
                                    }
                        </div>
    </div>
  )
}

export default Home