// Page.tsx
"use client"
import React, { useState } from 'react';
import DocsModal from '@/components/DocsModal';
import ImageText from '@/components/layouts/ImageText';
import NotText from '@/components/Nots/NotText';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotTextOpen, setIsNotTextOpen] = useState(false);
    const [newTypeText, setNewTypeText] = useState("");
    const [doc, setDoc] = useState({
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
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openText = () => setIsNotTextOpen(true);
    const closeText = () => setIsNotTextOpen(false);

    const addNewType = (type: number) => {
        const newText = newTypeText.replace(/\n\s*\n/g, '\n\n'); // Remove linhas em branco adicionais
        const newType = {
            type: type,
            text: newText,
            img: 0
        };

        setDoc({
            ...doc,
            types: [...doc.types, newType]
        });

        setNewTypeText("");

        setIsNotTextOpen(true);
        console.log(doc);
    };

    // Função para chamar addNewType(1) quando o botão "Salvar" for clicado
    const handleSave = () => {
        addNewType(1);
    };

    return (
        <div className='pt-8'>
            <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
                <h1 className='ml-1 pb-2 pt-10 md:pt-12'>{doc.nome}</h1>
                {doc.types.map((item, index) => (
                    <div key={index}>
                        {item.type === 1 ? (
                            <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                        ) : ""}
                    </div>
                ))}
                <hr />
                <NotText isNotTextOpen={isNotTextOpen} onNotTextClose={closeText} onSave={handleSave}>
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        className='w-full rounded-xl p-2'
                        onChange={(e) => setNewTypeText(e.target.value)}
                        style={{ whiteSpace: 'pre-line' }} // Aqui aplicamos o estilo para preservar quebras de linha
                    ></textarea>
                </NotText>
                <div className='w-full justify-end flex'>
                    <button onClick={openModal} className='bg-[#3B82F6] text-white px-2 rounded-full mt-3 mr-10'>+</button>
                </div>
                <DocsModal isOpen={isModalOpen} onClose={closeModal} style="fixed inset-0 flex items-center justify-end mr-60 z-30">
                    <div className='p-2'>
                        <ImageText func={openText} />
                    </div>
                </DocsModal>
            </div>
        </div>
    );
};

export default Page;
