import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white flex gap-4">
        <Link href="/homepage">Homepage</Link>
        <Link href="/about">About</Link>    
        <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar