import Link from 'next/link';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='w-full fixed z-40 bg-white md:block  '>
      <div className='md:ml-32 md:py-4 py-3 flex flex-row items-center'>
        <section className='ml-auto md:mr-20 mr-5 text-xl flex'>
            <h1 className='ml-5 pt-1'>Olá, Nicollas!</h1>
            <Link href={"/"} className='ml-10 text-4xl'>
                <FaUserCircle />
            </Link>
        </section>
      </div>
      <hr className=''/>
    </div>
  )
}

export default Header
