import React, { useEffect } from 'react'
import { BadgeCheck,SquareX } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

function Success() {

     const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify([]));
    // optionally redirect back after few seconds
    const timer = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='bg-[#efeee8] w-screen h-[100vh] flex justify-center items-center'>
       <div>
          <div className='w-full justify-center flex flex-col text-center items-center'><BadgeCheck width={100} height={100} className='text-green-600'/>
          
           <div className='font-bold mt-2 '>PAYMENT SUCCESSFUL !</div>
               <Link to="/"><button className='mt-8 bg-black text-white text-sm px-4 py-3 rounded-lg font-semibold'>Redirect To Home</button></Link> 

          </div> 
         
       </div>
       
    </div>
  )
}

export default Success
