"use client"
import Image from "next/image";
import Link from "next/link";
import {  useRouter } from "next/navigation";




export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    setTimeout(() => {
      router.push('/pages/home');
    }, 300);
  };

  return (
    <main className="flex min-h-screen flex-col-reverse md:flex-row items-center justify-between md:p-24 md:bg-[#3B82F6]  md:text-white">
      <div className="text-center bg-white/30 p-8 rounded-3xl md:ml-10">
        <div>
          <div>
            <h1 className="md:text-3xl font-extrabold md:hidden">Bem vindo de volta ao CIA!</h1>
            <h1 className="md:text-3xl mt-2 font-extrabold hidden md:block">Bem vindo de volta!</h1>

            <h2 className="w-5/6 m-auto mt-4 md:block hidden">Essa é a nossa Central de Informações para Atendimento.</h2>
          </div>
          <div>
            <section >
              <input type="text" placeholder="Matrícla" className="bg-gray-400/30 md:bg-white md:mt-8 mt-3 w-full py-2 md:py-4 px-8 rounded-lg"/>
            </section>
            <section>
              <input type="text" placeholder="Senha" className="bg-gray-400/30 md:bg-white mt-3 md:mt-6 w-full py-2 md:py-4 px-8 rounded-lg"/>
            </section>
            <p className="text-start mt-4 text-xs ml-2">Esqueceu a senha ?</p>
          </div>
          <div className="md:mt-20 mt-4">
            <button onClick={handleRedirect} className="md:bg-white py-2 md:py-3 rounded-full bg-[#3B82F6] text-white md:text-[#3B82F6] font-bold w-full md:w-9/12 md:text-xl">Entrar</button>
            <p className="mt-4 text-xs">Primeiro Acesso?</p>
          </div>
        </div>
      </div>
      <div className="w-screen md:w-6/12 text-center md:mr-10">
        <div>
            <div className="w-full px-2">
              <Image alt="" src="/Branco.png" width={1000} height={1000} className="w-screen md:w-3/6 h-auto m-auto bg-[#3B82F6] p-8 mt-4 md:mt-8 rounded-3xl"/>
            </div>
            <div className="mt-8 hidden md:block">
              <h1 className="text-4xl font-bold">CIA</h1>
              <h1 className="text-4xl font-bold mt-2">Curso Positivo</h1>
              <p className="w-10/12 m-auto mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas mi non sed ut odio. Non, justo, sed facilisi et. Eget viverra urna, vestibulum egestas faucibus egestas. Sagittis nam velit volutpat eu nunc.</p>
            </div>
        </div>
      </div>
    </main>
  );
}


