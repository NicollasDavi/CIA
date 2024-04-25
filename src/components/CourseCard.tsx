import Image from 'next/image'
import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import Link from 'next/link';


const CourseCard = () => {
  return (
    <div className='max-w-48 bg-[#3B82F6]/90 rounded-lg mb-10'>
        <div>
            <Link href={"/pages/curso"}>
                <Image src="/extensivo.png" width={1000} height={100} alt={''} className='w-full rounded-lg'></Image>
            </Link>
        </div>
        <div className='p-1 items-end justify-end flex'>
            <button className='p-1 rounded-lg  text-white mr-5 text-lg'><BiSolidEdit /></button>
            <button className='p-1 rounded-lg bg-red-500 text-white mr-3'><MdDeleteForever /></button>
        </div>
    </div>
  )
}

export default CourseCard