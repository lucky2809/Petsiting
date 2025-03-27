import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Adoptive() {
  return (
    <div className='px-20 bg-slate-100'>
      <div className='felx justify-center'>
        <p className='text-3xl text-center font-semibold flex justify-center gap-3'>Pets Available For Adoption Nearby....
          <Icon width={15} className='text-black font-extrabold' icon={"weui:arrow-filled"} style={{ marginTop: "4px", color: "", }} />
        </p>
      </div>

      <div className='grid grid-cols-4 gap-7 max-h-full border-red-600 py-10'>

        <div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

          <div className='rounded-lg h-80 w-full'>
            <img src="./images/adoptive.png" className='rounded-t-lg h-full w-full' alt="" srcset="" />
          </div>
          <div className=''>
            <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
              <p className='text-xl font-semibold'>Sir Woofinton</p>
            </div>
          </div>

        </div>
        <div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

<div className='rounded-lg h-80 w-full'>
  <img src="./images/adoptive.png" className='rounded-t-lg h-full w-full' alt="" srcset="" />
</div>
<div className=''>
  <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
    <p className='text-xl font-semibold'>Sir Woofinton</p>
  </div>
</div>

</div>
<div className='h-full border-2 border-slate-100 rounde-lg hover:border-2 hover:rounded-lg hover:border-green-800 shadow-lg'>

<div className='rounded-lg h-80 w-full'>
  <img src="./images/adoptive.png" className='rounded-t-lg h-full w-full' alt="" srcset="" />
</div>
<div className=''>
  <div className='felx justify-center items-center rounded-b-lg  text-center py-5 bg-white'>
    <p className='text-xl font-semibold'>Sir Woofinton</p>
  </div>
</div>

</div>
        
       
        <div className='h-full border-2 border-slate-100 rounde-lg shadow-2xl '>
<div className='rounded-t-lg h-80 w-full bg-green-600'>
</div>
<div className=''>
  <div className='felx justify-center items-center rounded-b-lg bg-green-800 text-center border-1 py-5  hover:bg-green-950'>
    <p className='text-xl font-semibold text-white'>MEET THEM</p>
  </div>
</div>

</div>


      </div>

    </div>


  )
}

export default Adoptive