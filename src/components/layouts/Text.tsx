import React from 'react'
import { CiTextAlignLeft } from "react-icons/ci";


const Text = () => {
  return (
    <div className='w-full bg-[#3B82F6] text-black flex flex-row p-1 justify-around text-2xl gap-1'>
        <div className='w-12/12 p-3 bg-white '>
            <CiTextAlignLeft />
        </div>
    </div>
  )
}

export default Text