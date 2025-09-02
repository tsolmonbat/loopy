import { useRouter } from "next/router";    
import React,{ useState } from "react"; 
const useStateTask = () => {
        const router = useRouter();
    const [color , setColor] = useState("black");
    return(
        <div className = {`flex flex-col justify-center items-center space-x-4 w-full h-screen bg-${color}-800`}>
            <button
            onClick={() => router.back()}
            className="border bg-slate-800 text-white py-4 px-6 fixed top-0 left-0  "
            >
                back
            </button>
            <p>Ungu Solih</p>
            {color == "red" ? (
              <>
              <button className="border flex bg-red-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor( color == "red" ? "black" : "red");
                  
              }}>
                  Ulaan
              </button>
              </>
            ) : color == "green" ?(
              <><button className="border flex bg-green-800 w-23 py-4 px-6 m-5 justify-center items-center h-10"
              onClick={() => {
                  setColor(color == "green" ? "black" : "green");
                  
              }}>
                  Nogoon
              </button></>
            ):color == "blue"?(
              <>
            <button className="border flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
            onClick={() => {
                setColor(color == "blue" ? "black" : "blue");
                
            }}>
                Tsenher
            </button></>
            ):(
              <><button className="border flex bg-red-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor("red");
                  
              }}>
                  Улаан
              </button>
              <button className="border flex bg-blue-800 w-23 py-4 px-6 m-5 h-10 justify-center items-center"
              onClick={() => {
                  setColor("blue");
                  
              }}>
                  Цэнхэр
              </button>
              <button className="border flex bg-green-800 w-23 py-4 px-6 m-5 justify-center items-center h-10"
              onClick={() => {
                  setColor("green");
                  
              }}>
                  Ногоон
              </button></>
            )
}
        </div>
    );
};

export default useStateTask;