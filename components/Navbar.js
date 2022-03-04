import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <Image src="/logo.png" width={100} height={100} />
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  )
}
