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
    img: string;
}

const Page = () => {
    const [image, setImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [open, setOpen] = useState(0)
    const [isNotTextOpen, setIsNotTextOpen] = useState(false);
    const [isNotTextImageOpen, setIsNotTextImageOpen] = useState(false);
    const [isNotImageOpen, setIsNotImageOpen] = useState(false);
    const [isNotImageTextOpen, setIsNotImageTextOpen] = useState(false);



    const [newTypeText, setNewTypeText] = useState("");
    const [name, setName] = useState("");
    const [doc, setDoc] = useState<{ nome: string; types: DocType[] }>({
        nome: "",
        types: []
    });
    const [selectedNotType, setSelectedNotType] = useState<number | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const closeText = () => setOpen(0);

    useEffect(() => {
        switch (open) {
            case 1:
                setIsNotTextOpen(true)
                setIsNotTextImageOpen(false)
                setIsNotImageOpen(false)
                setIsNotImageTextOpen(false)
                break;
            case 2:
                setIsNotTextImageOpen(true)
                setIsNotTextOpen(false)
                setIsNotImageOpen(false)
                setIsNotImageTextOpen(false)
                break;
            case 3:
                setIsNotTextImageOpen(false)
                setIsNotTextOpen(false)
                setIsNotImageOpen(false)
                setIsNotImageTextOpen(true)
                break;
            case 4:
                setIsNotTextImageOpen(false)
                setIsNotTextOpen(false)
                setIsNotImageOpen(true)
                setIsNotImageTextOpen(false)
                break;
            case 0:
                setIsNotTextOpen(false)
                setIsNotTextImageOpen(false)
                setIsNotImageOpen(false)
                setIsNotImageTextOpen(false)
            default:
                break;
        }
    }, [open])

    const addNewType = (type: number) => {
        const newText = newTypeText.replace(/\n\s*\n/g, '\n\n');
        const newType: DocType = {
            type: type,
            text: newText,
            img: image
        };

        setDoc(prevDoc => ({
            ...prevDoc,
            types: [...prevDoc.types, newType]
        }));

        setNewTypeText("");
        setImage("");
        closeText();
    };

    const handleSave = () => {
        if (selectedNotType !== null) {
            addNewType(selectedNotType);
            setSelectedNotType(null);
        }
    };


    const removeItem = (indexToRemove: number) => {
        setDoc(prevDoc => {
            const { nome, types } = prevDoc;
            const updatedTypes = types.filter((_, index) => index !== indexToRemove);
            return { nome, types: updatedTypes };
        });
    };
    
    useEffect(() => {
        console.log("Estado atualizado:", doc);
    }, [doc]);

    return (
        <div className='pt-8'>
            <div className='w-11/12 md:w-9/12 m-auto h-auto mb-10'>
                <section className='mt-16 items-end'>
                   <input type="text" value={name} className='ml-1 border mb-3' onChange={(e) => setName(e.target.value)} />
                    <hr className='mt-2'/>
                </section>
                {doc.types.map((item, index) => (
                    <div key={index} className='p-2 flex flex-row gap-2'>
                         <button className='bg-red-500 px-3 py-1 rounded-full w-[30px] text-center h-[30px] text-white' onClick={() => removeItem(index)}>R</button>
                        {item.type === 1 ? (
                            <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>
                        ) : ""}
                        {item.type === 2 ?(
                            <div className='flex flex-row gap-2'>
                                <p style={{ whiteSpace: 'pre-line' }} className='w-6/12'>{item.text} tipo2</p>
                                <img src={item.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto'/>
                            </div>
                        ) : ""}
                        {item.type === 3 ? (
                            <div className='flex flex-row gap-2'>
                                <img src={item.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto'/>
                                <p style={{ whiteSpace: 'pre-line' }} className='w-6/12'>{item.text} tipo2</p>
                            </div>
                        ) : "" }
                         {item.type === 4 ? (
                            <div className='flex flex-row gap-2'>
                                <img src={item.img} alt="Imagem escolhida" className='w-4/12 rounded-xl m-auto'/>
                            </div>
                        ) : "" }
                        <hr className='mt-2'/>
                    </div>
                ))}
                <hr />
                <NotText isNotTextOpen={isNotTextImageOpen} onNotTextClose={closeText} onSave={handleSave} type={selectedNotType || 3}>
                    <div className='flex md:flex-row flex-col gap-2'>
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className='md:w-6/12 w-full rounded-xl p-2'
                            value={newTypeText}
                            onChange={(e) => setNewTypeText(e.target.value)}
                            style={{ whiteSpace: 'pre-line' }}
                        ></textarea>
                        {!image ? (
                           <input
                           type='file'
                           className='md:w-6/12 w-full p-3'
                           onChange={(e) => {
                               const file = e.target.files && e.target.files[0];
                               if (file) {
                                   setImage(URL.createObjectURL(file));
                               }
                           }}
                       />
                        ) : (
                            <img src={image} alt="Imagem escolhida" className='md:w-6/12 w-full p-2 rounded-xl'/>
                        )}
                    </div>
                </NotText>
                <NotText isNotTextOpen={isNotImageTextOpen} onNotTextClose={closeText} onSave={handleSave} type={selectedNotType || 3}>
                    <div className='flex md:flex-row flex-col gap-2'>
                        {!image ? (
                           <input
                           type='file'
                           className='md:w-6/12 w-full p-3'
                           onChange={(e) => {
                               const file = e.target.files && e.target.files[0];
                               if (file) {
                                   setImage(URL.createObjectURL(file));
                               }
                           }}
                       />
                        ) : (
                            <img src={image} alt="Imagem escolhida" className='md:w-6/12 w-full p-2 rounded-xl'/>
                        )}
                         <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className='md:w-6/12 w-full rounded-xl p-2'
                            value={newTypeText}
                            onChange={(e) => setNewTypeText(e.target.value)}
                            style={{ whiteSpace: 'pre-line' }}
                        ></textarea>
                    </div>
                </NotText>
                <NotText isNotTextOpen={isNotImageOpen} onNotTextClose={closeText} onSave={handleSave} type={selectedNotType || 3}>
                    <div className='flex md:flex-row flex-col gap-2'>
                        {!image ? (
                           <input
                           type='file'
                           className='md:w-6/12 w-full p-3'
                           onChange={(e) => {
                               const file = e.target.files && e.target.files[0];
                               if (file) {
                                   setImage(URL.createObjectURL(file));
                               }
                           }}
                       />
                        ) : (
                            <img src={image} alt="Imagem escolhida" className='md:w-6/12 w-full p-2 rounded-xl'/>
                        )}
                    </div>
                </NotText>
                <NotText isNotTextOpen={isNotTextOpen} onNotTextClose={closeText} onSave={handleSave} type={selectedNotType || 3}>
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className='md:w-6/12 w-full rounded-xl p-2'
                            value={newTypeText}
                            onChange={(e) => setNewTypeText(e.target.value)}
                            style={{ whiteSpace: 'pre-line' }}
                        ></textarea>
                </NotText>
                <div className='w-full justify-end flex'>
                    <section>
                        <button onClick={openModal} className='bg-[#3B82F6] text-white px-2 rounded-full mt-3 mr-10'>+</button>
                    </section>
                    <section className='absolute mb-48'>
                    <DocsModal isOpen={isModalOpen} onClose={closeModal} style="relative">
                    <div className='p-2'>
                        <ImageText func={() => { setOpen(3), setSelectedNotType(3)}}/>
                        <TextImage func={() => { setOpen(2), setSelectedNotType(2)}}/>
                        <Text func={() => { setOpen(1), setSelectedNotType(1)}}  />
                        <Image func={() => { setOpen(4), setSelectedNotType(4)}}/>
                    </div>
                </DocsModal>
                    </section>
                </div>
               
            </div>
        </div>
    );
};

export default Page;
