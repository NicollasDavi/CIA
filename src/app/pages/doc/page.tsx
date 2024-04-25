"use client"
import CourseCard from '@/components/CourseCard'
import DocCard from '@/components/DocCard'
import DocsModal from '@/components/DocsModal'
import Image from '@/components/layouts/IMage';
import ImageText from '@/components/layouts/ImageText';
import Text from '@/components/layouts/Text';
import TextImage from '@/components/layouts/TextImage';
import React, { useState } from 'react'

const doc = {
    nome: "Teste",
    types: [
        {
            type: 1,
            text: "Teste teste teste",
            img: 0
        },
        {
            type: 2,
            text: "testtetstetstettettetste",
            img: 0
        },
        {
            type: 1,
            text: "escrita ",
            img: 0
        },
        
    ]
}

const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div className='pt-8'>
      <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
        <h1 className='ml-1 pb-2 pt-10 md:pt-12'>{doc.nome}</h1>
        {doc.types.map((item) => (
            <div key={item.type}>
                {item.type === 1 ? (
                    <p>{item.text}</p>
                ): ""}
            </div>
        ))}
        <hr />
        <div className='w-full justify-end flex'>
            <button onClick={openModal} className='bg-[#3B82F6] text-white px-2 rounded-full mt-3 mr-10'>+</button>
        </div>
      <DocsModal isOpen={isModalOpen} onClose={closeModal}>
        <ImageText />
        <TextImage />
        <Text />
        <Image />
      </DocsModal>
      </div>
    </div>
  )
}

export default page
