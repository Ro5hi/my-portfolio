import React from 'react'
import Info from './Info'
import Message from './Message'
// import Links from './Links'

export default function Footer() {
    return (
        <div className="w-full bg-black justify-items-center place-items-center select-none flex justify-center items-center h-16">
            <Info />
            <Message />
            {/* <Links /> */}
        </div>
    )
}
