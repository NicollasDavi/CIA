import Link from 'next/link'
import React from 'react'

const DocCard = () => {
  return (
    <div className='w-10/12 bg-[#3B82F6] rounded text-white mb-16'>
        <Link href={"/pages/dev"}>
            <section>
                <h1 className='p-3'>Title</h1>
                <hr className='w-full'/>
                <section className='p-1 flex justify-between px-3'>
                    <p>Nome</p>
                    <p>Data</p>
                </section>
            </section>
        </Link>
    </div>
  )
}

export default DocCard