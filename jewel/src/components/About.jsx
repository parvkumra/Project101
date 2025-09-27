import React from 'react'

function About() {
    return (
        <div className='w-full border-[#efeee8] border-solid border-x-14 py-8'>
            <div className='flex flex-col lg:flex-row px-6 justify-evenly gap-8'>
                <div className='flex w-full lg:w-1/2 flex-col text-6xl sm:text-7xl md:text-8xl lg:text-9xl pl-3 text-gray-300 gap-4 font-serif'>
                    <div className='w-full'>ABOUT</div>
                    <div>US</div> 
                </div>
                <div className='h-full flex-1'>
                     <p className='h-full leading-6 sm:leading-7 md:leading-8 font-semibold text-gray-500 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-6 gap-8 mt-8'> 
                 <div className='w-full lg:w-1/2'>
                        <p className='leading-6 sm:leading-7 md:leading-8 font-semibold text-gray-500 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                   <br/>
                    <p className='leading-6 sm:leading-7 md:leading-8 font-semibold text-gray-500 text-sm sm:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                 </div>
                <div className='flex-1 bg-[#cbc5b9] rounded-tl-3xl opacity-100 min-h-64 sm:min-h-80 md:min-h-96'>
                       <img
                    src="woman-looking-away-wearing-diamond-600nw-2462263759-removebg-preview.png"
                    className='z-10 object-contain w-full h-full opacity-100'
                    alt="Woman wearing diamond jewelry"                                    
                    />
                </div>
            </div>
        </div>
    )
}

export default About