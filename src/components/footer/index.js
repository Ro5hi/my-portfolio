import React from 'react'
import Info from './Info'
import Message from './Message'
// import Links from './Links'

export default function Footer() {
    return (
        <div className="h-32 bg-black mb-auto place-items-center select-none flex justify-center 2xl:text-xl lg:text-md md:text-md sm:text-sm xs:text-xs">
            <Info />
            <Message />
            {/* <Links /> */}
        </div>
    )
}
