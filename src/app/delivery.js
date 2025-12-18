import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  LogIn,
  PhoneCall,
  Mail,
} from "lucide-react";
import React from "react";

export default function Best() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-x-hidden ">
      <div className="h-screen w-20 fixed left-0 top-0 z-30 flex flex-col pt-20">
        <div className="bg-[#2a2a2a] p-5 grow flex flex-col w-full items-center gap-4">
          <div className="w-px bg-gray-600 grow"></div>

          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              className="size-10 flex items-center justify-center border border-gray-600 rounded-full transition hover:bg-rose-500 hover:border-rose-500"
            >
              <Icon size={18} className="text-white" />
            </a>
          ))}

          <div className="w-px bg-gray-600 h-14"></div>
        </div>

        <div className="w-20 py-12 bg-[#1a1a1a] flex items-center justify-center shrink-0 border-b-4 border-rose-500">
          <p className="[writing-mode:vertical-rl] rotate-180 text-xs tracking-widest text-slate-400">
            © Best Delivery 2025
          </p>
        </div>
      </div>

      <header className="fixed top-0 left-0 right-0 h-20 z-40 flex items-center bg-[#1a1a1a]">
        <button className="size-20 p-7 flex items-center justify-center bg-rose-500 ">
          <Menu size={24} />
        </button>

        <Link href="/" className="h-full bg-[#1a1a1a] px-6 flex items-center">
          <span className="font-extrabold text-xl tracking-wide">BEST</span>
        </Link>

        <div className="grow h-full flex justify-end items-center gap-8 bg-[#2a2a2a]/80 px-8">
          <div className="flex items-center gap-3 text-sm">
            <PhoneCall size={18} className="text-gray-400" />
            <span>+976 8806 4934</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail size={18} className="text-gray-400" />
            <span>Besthurgelt@gmail.com</span>
          </div>
        </div>

        <Link
          href="/signin"
          className="w-44 h-full font-bold flex items-center justify-center gap-2 bg-rose-500 "
        >
          <LogIn size={18} />
          <span className="text-sm">Нэвтрэх</span>
        </Link>
      </header>
 
      <section className="w-screen min-h-screen relative flex flex-col justify-center items-start pl-40 pr-32 gap-6 bg-[url('/bike.webp')] bg-cover bg-center">
        

        <p className="text-xl max-w-[380px] text-white">
          Та доорх товч дээр дарж хүргэлтээ шалгах боломжтой.
        </p>

        <a className="mt-2 rounded-xl gap-2 font-bold px-7 py-4 text-sm flex items-center bg-rose-500 ">
          Хүргэлт шалгах
          <ArrowRight size={18} />
        </a>
      </section>
   
      <section className="w-screen min-h-screen bg-[#2a2a2a] flex justify-center items-center px-36 relative overflow-hidden">
        <div className="w-full flex justify-between items-center z-10">
          <div className="flex flex-col gap-8 max-w-md">
            <div>
              <p className="font-bold text-6xl text-rose-500">Бест</p>
              <p className="font-bold text-5xl">Хүргэлт</p>
            </div>

            <p className="text-gray-300 text-base">
              Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга өгөх,
              агуулахын тоо бүртгэл болон тайлангаа нэг дор шийднэ.
            </p>
          </div>

          <div className="relative flex items-center">
            <div className="flex flex-col gap-6 absolute right-52">
              {[
                ["01", "Түргэн шуурхай"],
                ["02", "Найдвартай"],
                ["03", "Итгэлтэй үйлчилгээ"],
              ].map(([no, title]) => (
                <div
                  key={no}
                  className="p-10 flex flex-col gap-6 bg-rose-500 rounded-3xl  -[1.02] transition"
                >
                  <div className="flex gap-4 items-center">
                    <span className="text-3xl font-bold text-white/70">{no}</span>
                    <h3 className="text-2xl font-bold">{title}</h3>
                  </div>
                  
                </div>
              ))}
            </div>

            <div className="relative w-96 h-[600px] rounded-4xl overflow-hidden">
              <div className="w-full h-full bg-[url('/com.webp')] bg-cover bg-center" />
            </div>
          </div>
        </div>

        <div className="absolute -left-48 w-[500px] h-[500px] bg-rose-500/30 blur-[150px]" />
        <div className="absolute -right-48 w-[500px] h-[500px] bg-rose-500/20 blur-[150px]" />
      </section>
    </div>
  );
}
