"use client"
import { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ptBR from 'date-fns/locale/pt-BR';


const Page = () => {
    const [selected, setSelected] = useState<Date | undefined>();

    let footer: JSX.Element;
    if (selected) {
        footer = <p className="text-gray-700 mt-6">Você selecionou {format(selected, 'PP')}.</p>;
    } else {
        footer = <p className="text-gray-700 mt-6">Selecione um dia.</p>;
    }

    return (
        <div className="w-12/12 md:w-9/12 mx-auto flex flex-col md:flex-row">
            <div className="md:pt-32 pt-20 w-11/12 md:w-6/12 m-auto">
                <div className='bg-gray-100/30 rounded-lg shadow-2xl shadow-black px-3 md:px-8 md:py-4 w-full md:w-8/12'>
                    <DayPicker
                        showOutsideDays
                        fixedWeeks
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                        className='m-auto'
                    />
                </div>
                <button className='md:mt-24 mt-8 rounded-lg text-white px-10 py-2 bg-[#3B82F6]'>Adicionar compromisso</button>
            </div>
            <div className='px-4 md:w-6/12 pb-5'>
                <div className=' mt-32 flex flex-col gap-5'>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>24</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>27</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>38</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>50</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>24</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                    <section className='bg-gray-200/80 rounded-lg flex items-center'>
                        <h1 className='px-8 py-3 border-r-zinc-950 border-r w-2/12'>24</h1>
                        <p className='m-auto'>Nome do Evento</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Page;
