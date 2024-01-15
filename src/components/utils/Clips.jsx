import React from 'react'
import {PlayIcon} from "@heroicons/react/24/solid"

const Clips = ({ clip, imgsrc }) => {
    return (
        <>
            <div className='relative h-28 w-32 overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 lg:h-24 md:h-20 sm:h-14 lg:w-28 md:w-24 sm:w-16'>
                <img src={imgsrc} alt='img/clips' className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10' />
                <div className='bg-white blur-effect-theme absolute top-11 right-0 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 opacity-100 z-[100] w-8 h-8 md:w-5 md:h-5 rounded-full flex items-center justify-center'><PlayIcon className="text-slate-900 icon-style md:h-3 md:w-3"/></div>
                <video 
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    className='absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl transition-opacity duration-500'>
                    <source type='video/mp4' src={clip} />
                </video>
            </div>
        </>
    )
}

export default Clips