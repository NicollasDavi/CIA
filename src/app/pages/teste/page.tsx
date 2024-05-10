// pages/index.js (ou qualquer outro componente)
"use client"
import DocsModal from '@/components/DocsModal';
import Image from '@/components/layouts/IMage';
import ImageText from '@/components/layouts/ImageText';
import Text from '@/components/layouts/Text';
import TextImage from '@/components/layouts/TextImage';
import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='ml-32 pt-28'>
      <h1>Página Principal</h1>
     
    </div>
  );
};

export default Home;
