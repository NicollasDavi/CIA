import React from 'react';

const Page = () => {
  return (
    <div className='pt-8'>
      <div className='w-11/12 md:w-9/12 m-auto h-auto mb-8'>
        <h1 className='ml-1 pb-2 pt-10 md:pt-12'>Calculadora</h1>
      </div>
      <div className='gap-4 md:gap-0 w-11/12 m-auto h-auto mb-10 md:pl-28'>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-10'>
        <select value="Curso" className="bg-gray-400/30 md:bg-white   w-full py-2 md:py-3 px-8 rounded-lg border-blue-500 border-2">
            <option value="">Extensivo</option>
            <option value="">Terceirão</option>
            <option value="">Semi1</option>
            <option value="">Semi2</option>
            <option value="">Online</option>
        </select>

        <select value="Turno" className="bg-gray-400/30 md:bg-white   w-full py-2 md:py-3 px-8 rounded-lg border-blue-500 border-2">
            <option value="">Manhã</option>
            <option value="">Tarde</option>
            <option value="">Noite</option>
        </select>

        <input type="text" placeholder="Desconto" className="bg-gray-400/30 md:bg-white   w-full py-2 md:py-3 px-8 rounded-lg border-blue-500 border-2"/>

        <select value="Unidade" className="bg-gray-400/30 md:bg-white   w-full py-2 md:py-3 px-8 rounded-lg border-blue-500 border-2">
            <option value="">VM</option>
            <option value="">HV</option>
            <option value="">BV</option>
            <option value="">PG</option>
            <option value="">JV</option>
        </select>

        
        <section className=' rounded-lg col-span-2 md:col-span-1'>
            <input type="text" placeholder="Parcelamento" className="bg-gray-400/30 md:bg-white   w-full py-2 md:py-3 px-8 rounded-lg border-blue-500 border-2"/>
        </section>

        </div>
      </div>
      <div className='md:flex md:flex-row  w-11/12 md:w-9/12 m-auto h-auto mb-10'>
        <div className='md:w-6/12 ml-10'>
            <h1 className='font-bold'>curso turno em parce com desc de desconto</h1>
            <p className='pt-5'>parce de mensalidade</p>
            <p className='pt-5'>escola: valor</p>
            <p className='pt-5'>material: valor</p>
        </div>
        <div className='md:w-6/12 ml-10 pt-10 md:pt-0'>
            <h1 className='font-bold'>curso turno em parce sem desconto</h1>
            <p className='pt-5'>parce de mensalidade</p>
            <p className='pt-5'>escola: valor</p>
            <p className='pt-5'>material: valor</p>
        </div>
      </div>
      <div className='w-12/12 md:w-12/12 m-auto h-auto mb-10 md:mt-40 flex'>
        <button className='m-auto w-10/12 md:w-4/12 py-3 text-white bg-[#3B82F6] rounded-lg'>Calcular</button>
      </div>
    </div>
  );
};

export default Page;
