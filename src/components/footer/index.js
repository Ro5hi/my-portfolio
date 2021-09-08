import React from 'react'
import Info from './Info'
import Message from './Message'
// import Links from './Links'

export default function Footer() {
    return (
        <div className="flex mx-auto bg-black w-full h-5/6 p-12">
            <Info />
            <Message />
            {/* <Links /> */}
        </div>
    )
}
