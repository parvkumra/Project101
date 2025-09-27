import React from 'react'
import { BadgeCheck,SquareX } from 'lucide-react';
import { Link } from 'react-router';

function Canceli() {
  return (
    <div className='bg-[#efeee8] w-screen h-[100vh] flex justify-center items-center'>
       <div>
          <div className='w-full justify-center flex flex-col text-center items-center'><SquareX width={100} height={100} className='text-red-600'/>
          
           <div className='font-bold'>OOPS ! PAYMENT FAILED</div>
               <Link to="/"><button className='mt-8 bg-black text-white text-sm px-4 py-3 rounded-lg font-semibold'>Redirect To Home</button>
</Link> 
          </div> 
         
       </div>
       
    </div>
  )
}

export default Canceli
