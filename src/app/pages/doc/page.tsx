"use client"
import React, { useState, useEffect } from 'react';
import DocsModal from '@/components/DocsModal';
import ImageText from '@/components/layouts/ImageText';
import NotText from '@/components/Nots/NotText';
import TextImage from '@/components/layouts/TextImage';
import Text from '@/components/layouts/Text';
import Image from '@/components/layouts/Image';

interface DocType {
    type: number;
    text: string;
    img: number;
}

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNotTextOpen, setIsNotTextOpen] = useState(false);
    const [newTypeText, setNewTypeText] = useState("");
    const [name, setName] = useState("");
    const [doc, setDoc] = useState<{ nome: string; types: DocType[] }>({
        nome: "",
        types: []
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openText = () => setIsNotTextOpen(true);
    const closeText = () => setIsNotTextOpen(false);

    const addNewType = (type: number) => {
        const newText = newTypeText.replace(/\n\s*\n/g, '\n\n');
        const newType: DocType = {
            type: type,
            text: newText,
            img: 0
        };

        setDoc(prevDoc => ({
            ...prevDoc,
            types: [...prevDoc.types, newType]
        }));

        setNewTypeText("");
        setIsNotTextOpen(true);
    };

    const handleSave = () => {
        addNewType(1);
    };

    useEffect(() => {
        console.log("Estado atualizado:", doc);
    }, [doc]);

    return (
        <div className='pt-8'>
            <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
                <input type="text" value={name} className='ml-1 pb-2 pt-10 md:pt-12' onChange={(e) => setName(e.target.value)} />
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
                        style={{ whiteSpace: 'pre-line' }}
                    ></textarea>
                </NotText>
                <div className='w-full justify-end flex'>
                    <button onClick={openModal} className='bg-[#3B82F6] text-white px-2 rounded-full mt-3 mr-10'>+</button>
                </div>
                <DocsModal isOpen={isModalOpen} onClose={closeModal} style="fixed inset-0 flex items-center justify-end mr-60 z-30">
                    <div className='p-2'>
                        <ImageText />
                        <TextImage />
                        <Text func={openText} />
                        <Image />
                    </div>
                </DocsModal>
            </div>
        </div>
    );
};

export default Page;
