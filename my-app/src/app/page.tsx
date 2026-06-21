"use client";

import Image from "next/image";
import Toast from "@/src/component/Toast"
import{useState} from "react";

export default function Home() {

  const[showToast,setShowToast] = useState(false);

  const handleClick=()=>{
    setShowToast(true)

    setTimeout(()=>{
      setShowToast(false);
    },3000)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button onClick={handleClick}>
        show toast
      </button>
      <h1>First Commit in feature one</h1>

      <Toast message="Data save successfully!" show={showToast}/>
    </div>
  );
}
