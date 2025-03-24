import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Tips() {
    return (
        <div>
            <div className='min-2xl:px-40 px-20 py-5 flex  justify-between gap-2 min-2xl:gap-15 w-full h-full max-sm:flex max-sm:flex-col max-sm:w-full max-sm:px-5'>
                <div className='border-1 border-slate-300 flex  flex-col justify-between rounded-lg w-full bg-white py-5 px-7 max-sm:px-4'>
                    <p className='text-3xl font-semibold'>
                    Service for every dog and cat
                    </p>
                    <div className='flex flex-col gap-5 justify-center w-full mt-5 min-2xl:text-xl'>
                    <p className='flex items-center gap-3'>
                        <span className='text-4xl  font-semibold'>
                     <Icon width={30} className='text-yellow-500' icon={"ic:sharp-tips-and-updates"} /> 
                    </span>
                    <div className='flex flex-col'>
                    <span className='text-lg font-semibold min-2xl:text-2xl'>
                    Pet Boarding Tips –
                    </span>
                    <span className='text-gray-400 text-md'>
                     Learn how to prepare your furry friend for a comfortable stay at our facility.
                     Get expert advice on keeping your pet happy and healthy.
                     </span>
                     </div>
                    </p>
                    <p className='flex items-center gap-3'>
                        <span className='text-4xl font-semibold'>
                    <Icon width={30} className='text-green-600' icon={"healthicons:health"} />                     
                    </span>
                    <div className='flex flex-col'>
                    <span className='text-lg font-semibold min-2xl:text-2xl'>
                    Health & Wellness –
                    </span>
                    <span className='text-gray-400 text-md'>
                         Get expert advice on keeping your pet happy and healthy.
                         Get expert advice on keeping your pet happy and healthy.
                     </span>
                     </div>
                    </p>
                    <p className='flex items-center gap-3'>
                        <span className='text-4xl font-semibold'>
                        <Icon width={30} className='text-orange-500' icon={"mynaui:funny-circle-solid"} />                      
                    </span>
                    <div className='flex flex-col'>
                    <span className='text-lg font-semibold min-2xl:text-2xl'>
                    Fun Activities –
                    </span>
                    <span className='text-gray-400 text-md'>
                    Discover the engaging activities we offer to make your pet’s stay enjoyable.
                    Get expert advice on keeping your pet happy and healthy.
                     </span>
                     </div>
                    </p>
                    <p className='flex items-center gap-3'>
                        <span className='text-4xl font-semibold'>
                        <Icon width={30} className='text-blue-500' icon={"mdi:customer-service"} />                      
                    </span>
                    <div className='flex flex-col'>
                    <span className='text-lg font-semibold min-2xl:text-2xl'>
                    Customer Storie –
                    </span>
                    <span className='text-gray-400 text-md'>
                    Read heartwarming tales from pet parents who trust us with their beloved companions.
                    Get expert advice on keeping your pet happy and healthy.
                     </span>
                     </div>
                    </p>
                    
                    <p className='flex items-center gap-3'>
                        <span className='text-4xl font-semibold'>
                        <Icon width={30} className='text-red-600' icon={"bxs:offer"} />                     
                    </span>
                    <div className='flex flex-col'>
                    <span className='text-lg font-semibold min-2xl:text-2xl'>
                    Special Offers & Update –
                    </span>
                    <span className='text-gray-400 text-md'>
                    Stay in the loop about promotions, new services, and seasonal deals!
                    Get expert advice on keeping your pet happy and healthy.
                     </span>
                     </div>
                    </p>
                    <p className='min-2xl:text-lg'>We are passionate about creating a safe, fun, and loving environment for your pets. Follow our blog to stay informed and ensure your pet receives the best care possible!
                    </p>
                
                    </div>
                </div>

                <div className='  flex flex-col rounded-lg gap-5 justify-between w-full bg-white '>
                    <div className='relative'>
                        <img className="object-fit h-[45rem]  w-full rounded-lg" src="../images/tipspic2.jpg" alt="" />
                    <div className='absolute -top-5 h-full flex flex-col justify-between px-5'>
                    <div className=' p-5'>
                        <p className='text-white text-2xl flex flex-col gap-4 max-sm:gap-4'><span className='flex flex-col '><span className='text-8xl max-sm:text-6xl font-extrabold text-green-900'>Trusted</span> <span className='text-8xl max-sm:text-6xl font-extrabold text-green-900'> cat care</span></span><span className='text-7xl max-sm:text-5xl font-bold'> Feeding,</span><span className='text-6xl max-sm:text-5xl font-bold'> Grooming,</span><span className='text-5xl max-sm:text-4xl font-bold max-sm:font-semibold'> Health monitoring.</span></p>
                    </div>
                    <div className='px-5'>
                        <button className='btn flex items-center gap-6 rounded-lg bg-green-700 text-white hover:bg-green-950 p-4'>Lets Get Started<Icon width={30} className=' text-white border-1 rounded-full p-1' icon={"mingcute:arrow-right-fill"} /></button>
                    </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tips