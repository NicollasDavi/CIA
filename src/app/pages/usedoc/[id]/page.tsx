"use client"
import axiosInstance from '@/app/axiosInstance';
import DocsModal from '@/components/DocsModal';
import ImageText from '@/components/layouts/ImageText';
import TextImage from '@/components/layouts/TextImage';
import NotText from '@/components/Nots/NotText';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const id = window.location.pathname.split('/').pop();
  const [doc, setDoc] = useState<any[]>([]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (id) {
      axiosInstance.get(`/doc/${id}`)
        .then(response => {
          console.log('Dados recebidos da API:', response.data.docTypes);
          setDoc(response.data.docTypes);
        })
        .catch(error => {
          console.error('Erro ao obter dados da API:', error);
        });
    }
  }, [id]);

  console.log('Estado de doc:', doc);

  return (
    <div className='pt-8'>
      <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
        <section className='mt-16 items-end'>
          <h1>Nome</h1>
        </section>
        {doc && doc.map(doc => (
          <div key={doc.id} className='p-2 flex flex-row gap-2'>
            {doc.type === 1 ? (
              <p>{doc.text}</p>
            ) : null}
            {doc.type === 2 ? (
              <div className='flex flex-row gap-2'>
                <p className='w-6/12'>{doc.text}</p>
                <img src={doc.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto' />
              </div>
            ) : null}
            {doc.type === 3 ? (
              <div className='flex flex-row gap-2'>
                <img src={doc.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto' />
                <p className='w-6/12'>{doc.text}</p>
              </div>
            ) : null}
            {doc.type === 4 ? (
              <div className='flex flex-row gap-2'>
                <img src={doc.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto' />
              </div>
            ) : null}
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default Page;
