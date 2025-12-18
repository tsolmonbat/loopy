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
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-x-hidden">

      <div className="h-screen w-20 fixed left-0 top-0 z-30 flex flex-col pt-20">
        <div className="bg-[#2a2a2a] p-5 grow flex flex-col w-full items-center gap-3 ">
          <div className="w-px bg-gray-500 grow"></div>
          <a
            href="https://facebook.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all">
            
            <Facebook size={20} className="text-white" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all" >
            
            <Instagram size={20} className="text-white" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            className="size-10 flex items-center justify-center border border-gray-500 rounded-full transition-all">
            
            <Youtube size={20} className="text-white" />
          </a>

          <div className="w-px bg-gray-500 h-15"></div>
        </div>

        <div className="w-20 py-12 bg-[#1a1a1a] flex items-center justify-center shrink-0 border-b-4 border-rose-500 box-border">
          <p className="[writing-mode:vertical-rl] whitespace-nowrap rotate-180 text-sm text-slate-300">
            oBest Delivery 2025.
          </p>
        </div>
      </div>
      

      <header className="fixed top-0 left-0 right-0 h-20 z-40 flex items-center">
        <button className="size-20 p-7 flex items-center justify-center bg-rose-500 text-white hover:brightness-90 transition-all">
          <Menu size={24} />
        </button>

        <Link href="/" className="h-full bg-[#1a1a1a] px-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="36"
            fill="none"
            viewBox="0 0 239 36"
          >
            <path
              fill="currentColor"
              d="M19.723 17.025c2.227 1.047 3.614 3.514 3.109 6.123a9.73 9.73 0 0 1-9.55 7.877H0l1.178-6.132h9.568l-.243 1.347 6.03-3.457-4.789-3.46-.266 1.491H1.96l.648-3.374.18-.942.377-1.962h9.458l-.242 1.348 6.028-3.458-4.786-3.458-.268 1.49H3.949l1.143-5.96H17.91c3.931 0 6.888 3.584 6.141 7.444a6.8 6.8 0 0 1-4.327 5.083M36.467 10.154c-5.913 0-11.235 4.78-11.886 10.675s3.616 10.673 9.527 10.673c3.391 0 6.586-1.57 8.82-4.022l-4.672-3.645c-.786 1.225-2.061 1.768-3.4 1.768-1.51 0-2.72-1.052-3.242-2.596h13.368c2.668-7.641-2.602-12.853-8.515-12.853m-4.51 8.607c.787-1.531 2.235-2.81 3.764-2.877 2.423-.107 3.099 1.074 3.275 2.877zM76.208 17.251h4.078l1.389-6.387h-4.2l1.057-5.334h-7.264l-.805 3.608a2.21 2.21 0 0 1-2.155 1.726h-1.546l-1.389 6.387h3.275l-1.328 5.941c-.891 3.992 2.145 7.782 6.235 7.782h4.203l1.158-6.493h-1.63a2.06 2.06 0 0 1-2.022-2.461l.945-4.769zM51.44 23.603s.7 2.456 2.772 2.456 2.386-1.86.315-2.562c-2.07-.701-6.842-1.83-6.842-6.178s3.86-6.84 9.474-6.84 7.475 2.913 7.65 4.596l-6.352 2.244s-.14-1.085-.982-1.437c-.842-.351-2.312-.056-2.212.878.109 1.005 1.58 1.3 4.141 2.246 2.562.948 4.597 2.983 4.071 6.107-.525 3.124-3.404 6.39-9.159 6.39s-8.668-2.355-9.089-5.654zM131.431 9.745c-5.621 0-10.679 4.544-11.298 10.147s3.437 10.145 9.056 10.145c3.223 0 6.26-1.493 8.383-3.823l-4.44-3.465c-.748 1.165-1.96 1.681-3.233 1.681-1.435 0-2.585-1-3.081-2.468h12.707c2.536-7.263-2.473-12.217-8.094-12.217m-4.287 8.181c.749-1.455 2.124-2.671 3.578-2.734 2.303-.102 2.946 1.02 3.113 2.734zM192.041 9.745c-5.621 0-10.679 4.544-11.298 10.147s3.436 10.145 9.056 10.145c3.223 0 6.259-1.493 8.383-3.823l-4.441-3.465c-.747 1.165-1.959 1.681-3.232 1.681-1.435 0-2.585-1-3.082-2.468h12.707c2.537-7.263-2.473-12.217-8.093-12.217m-4.287 8.181c.748-1.455 2.124-2.671 3.578-2.734 2.302-.102 2.945 1.02 3.113 2.734zM119.659 15.27c0 7.894-6.398 14.293-14.292 14.293H93.675l1.818-9.371h6.686l-.841 4.004 14.394-7.225-11.431-7.226-.638 4.037h-6.926l1.823-9.403h10.209c3.006 0 5.729 1.22 7.7 3.19a10.86 10.86 0 0 1 3.19 7.7M152.428 3.245h-7.077l-5.149 26.317h7.077zM160.745 10.45l-3.739 19.113h-7.076l3.739-19.113zM162.155 10.45l2.668 19.112h8.473l9.873-19.112h-7.871l-4.871 11.541-1.067-11.54zM230.201 10.45l-4.632 11.756-.972-11.756h-7.071l2.808 21.743-2.28 3.807h7.015l13.203-25.55zM210.879 12.064l.297-1.614h-6.801l-3.565 19.113h7.142l1.891-10.23a4.21 4.21 0 0 1 3.959-2.777h.988l1.267-6.573c-3.236 0-5.178 2.08-5.178 2.08M162.737 4.203c-.186 2.32-2.275 4.202-4.664 4.202-2.39 0-4.177-1.881-3.99-4.202C154.269 1.88 156.358 0 158.747 0c2.39 0 4.177 1.881 3.99 4.203"
            />
          </svg>
        </Link>

        <div className="grow h-full flex justify-end items-center gap-5 bg-[#2a2a2a] px-7 opacity-70">
          <div className="flex items-center gap-3 whitespace-nowrap text-sm opacity-100">
            <PhoneCall size={20} className="text-gray-400" />
            <span className="text-white">+976 8806 4934</span>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap text-sm opacity-100">
            <Mail size={20} className="text-gray-400" />
            <span className="text-white">Besthurgelt@gmail.com</span>
          </div>
        </div>

        <Link
          href="/signin"
          className="w-44 h-full shrink-0 font-bold flex items-center justify-center gap-2 bg-rose-500 text-white hover:brightness-90 transition-all"
        >
          <LogIn size={20} />
          <span className="text-sm">Нэвтрэх</span>
        </Link>
      </header>


      <div className="w-screen min-h-screen relative flex flex-col justify-center items-start pl-40 pr-32 p-8 gap-6 bg-[url('/bike.webp')] bg-cover bg-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="262"
          height="131"
          fill="none"
          viewBox="0 0 262 131"
        >
          <path
            fill="currentColor"
            d="M46.863 31.234c4.034 1.897 6.548 6.367 5.632 11.094A17.625 17.625 0 0 1 35.192 56.6H11.126L13.26 45.49h17.336l-.44 2.442 10.925-6.265-8.675-6.267-.484 2.7H14.68l1.173-6.113.327-1.706.682-3.557H34l-.438 2.444L44.484 22.9l-8.673-6.264-.486 2.698H18.281l2.071-10.8h23.224c7.122 0 12.48 6.496 11.127 13.49a12.31 12.31 0 0 1-7.84 9.21M77.201 18.78c-10.714 0-20.356 8.66-21.537 19.342-1.178 10.682 6.552 19.34 17.263 19.34 6.144 0 11.933-2.847 15.98-7.289l-8.464-6.604c-1.425 2.22-3.735 3.204-6.161 3.204-2.736 0-4.928-1.905-5.875-4.704H92.63C97.465 28.223 87.915 18.78 77.2 18.78M69.03 34.375c1.427-2.774 4.05-5.092 6.82-5.213 4.39-.194 5.616 1.946 5.935 5.213zM149.209 31.643h7.389l2.517-11.573h-7.611l1.916-9.664h-13.161l-1.46 6.536a4 4 0 0 1-3.904 3.128h-2.801l-2.517 11.573h5.935l-2.406 10.765c-1.616 7.233 3.886 14.1 11.296 14.1h7.616l2.099-11.765h-2.955a3.734 3.734 0 0 1-3.662-4.46l1.711-8.64zM104.33 43.148s1.271 4.45 5.024 4.45 4.324-3.37.571-4.64c-3.752-1.272-12.398-3.318-12.398-11.196s6.995-12.393 17.168-12.393 13.543 5.278 13.86 8.328l-11.509 4.065s-.255-1.966-1.78-2.602c-1.525-.637-4.188-.104-4.007 1.59.197 1.82 2.862 2.353 7.503 4.07 4.641 1.716 8.329 5.404 7.377 11.064-.951 5.66-6.169 11.578-16.596 11.578-10.428 0-15.705-4.266-16.468-10.244zM68.412 82.888c-10.185 0-19.35 8.232-20.472 18.385-1.12 10.153 6.228 18.383 16.41 18.383 5.84 0 11.342-2.706 15.189-6.929l-8.046-6.277c-1.354 2.11-3.55 3.045-5.856 3.045-2.6 0-4.685-1.811-5.584-4.471h23.024c4.595-13.16-4.481-22.136-14.665-22.136M60.644 97.71c1.356-2.636 3.849-4.84 6.483-4.954 4.172-.184 5.337 1.85 5.641 4.954zM178.232 82.888c-10.184 0-19.349 8.232-20.471 18.385-1.12 10.153 6.227 18.383 16.409 18.383 5.839 0 11.342-2.706 15.189-6.929l-8.046-6.277c-1.354 2.11-3.55 3.045-5.856 3.045-2.601 0-4.684-1.811-5.584-4.471h23.024c4.596-13.16-4.481-22.136-14.665-22.136m-7.768 14.822c1.356-2.636 3.849-4.84 6.483-4.954 4.173-.184 5.338 1.85 5.641 4.954zM47.081 92.897c0 14.304-11.593 25.899-25.897 25.899H0l3.294-16.98H15.41l-1.524 7.256 26.082-13.091-20.713-13.094-1.156 7.314H5.548l3.304-17.036h18.497a19.67 19.67 0 0 1 13.952 5.78 19.67 19.67 0 0 1 5.78 13.952M106.457 71.11H93.634l-9.33 47.684h12.823zM121.526 84.165l-6.775 34.632h-12.82l6.775-34.632zM124.081 84.165l4.835 34.629h15.352l17.89-34.629h-14.263l-8.826 20.912-1.933-20.912zM247.376 84.165l-8.393 21.301-1.76-21.301h-12.814l5.089 39.397-4.132 6.897h12.711L262 84.165zM212.366 87.089l.538-2.924h-12.323l-6.459 34.632h12.94l3.426-18.536a7.635 7.635 0 0 1 7.175-5.034h1.789l2.297-11.909c-5.864 0-9.383 3.77-9.383 3.77M125.136 72.845c-.337 4.205-4.122 7.614-8.452 7.614s-7.567-3.409-7.229-7.614c.337-4.206 4.122-7.615 8.452-7.615s7.567 3.409 7.229 7.615"
          />
        </svg>

        <p className="text-xl max-w-[380px] text-white">
          Та доорх товч дээр дарж хүргэлтээ шалгах боломжтой.
        </p>

        <a className="rounded-xl gap-2 font-bold px-6 py-4 text-sm w-fit flex items-center bg-rose-500 text-white hover:brightness-90 transition-all">
          Хүргэлт шалгах
          <ArrowRight size={20} />
        </a>
      </div>


      <div
        className="w-screen min-h-screen relative bg-[#2a2a2a] flex justify-center items-center overflow-hidden px-36"
      >
        <div className="w-full flex flex-row justify-between items-center z-10">
          <div className="flex flex-col gap-9 w-min p-6 items-center">
            <div className="flex items-start flex-col gap-9 flex-1">
              <div className="block items-end gap-2">
                <p className="font-bold text-6xl text-rose-500">Бест</p>
                <p className="font-bold text-5xl text-white">Хүргэлт</p>
              </div>
              <p className="text-gray-300 text-base max-w-md">
                Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                өгөх, агуулахын тоо бүртгэл болон тайлангаа нэг дор шийднэ.
                <br />
                AppStore, GooglePlay-ээс апп-аа татаж аваарай.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="393"
              height="180"
              fill="none"
              viewBox="0 0 393 180"
              className="flex-1 block w-max"
            >
              <path
                stroke="url(#paint0_linear_82_430)"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M389 89.569 275.662 3.586l-6.313 37.032H2v101.459h250.021l-5.721 33.509z"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_82_430"
                  x1="389"
                  x2="2"
                  y1="89.586"
                  y2="89.586"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F33454" />
                  <stop offset="1" stopColor="#F33454" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex items-center relative">
            <div className="flex flex-col gap-9 w-[460px] absolute right-52 z-10">

              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    01
                  </p>
                  <p className="text-2xl font-bold text-white">
                    Түргэн шуурхай
                  </p>
                </div>
                <p className="leading-5 text-base text-white/90">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
      
              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    02
                  </p>
                  <p className="text-2xl font-bold text-white">Найдвартай</p>
                </div>
                <p className="leading-5 text-base text-white/90">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
     
              <div className="p-12 flex flex-col gap-9 bg-rose-500 rounded-3xl">
                <div className="flex gap-3 h-6 items-center">
                  <p className="w-15 text-center text-3xl text-white/70 font-bold">
                    03
                  </p>
                  <p className="text-2xl font-bold text-white">Core Value 3</p>
                </div>
                <p className="text-white">
                  Bestdelivery.mn цогц системээр та хүргэлтээ хянах, захиалга
                  өгөх, агуулахын тоо бүртгэл болон тайлангаа
                </p>
              </div>
            </div>

            <div className="relative w-96 h-[600px]">
              <div className="w-full h-full object-cover bg-[url('/com.webp')] bg-cover bg-center rounded-4xl"></div>
            </div>
          </div>
        </div>

        <div className="rounded-full w-[536px] h-[536px] absolute -left-48 bg-rose-500/30 blur-[150px] z-0"></div>
        <div className="rounded-full w-[816px] h-[816px] absolute -top-[464px] bg-red-200/20 blur-[150px] z-0"></div>
        <div className="rounded-full w-[904px] h-[904px] absolute -bottom-[464px] bg-blue-500/20 blur-[150px] z-0"></div>
        <div className="rounded-full w-[536px] h-[536px] absolute -right-[264px] bg-rose-500/30 blur-[150px] z-0"></div>
      </div>
    </div>
  );
}