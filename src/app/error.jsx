"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(()=>{
        console.log(error)
    },[error])
  return (
    <div className="text-center mt-10">
        <h1>Something Went Wrong</h1>
        <button className="hover:text-yellow-500 border-2 border-yellow-500 px-2 rounded-lg mt-4" onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
