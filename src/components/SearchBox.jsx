"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      router.push(`/search/${searchTerm}`)
    }

  }

  return (
    <div className="flex items-center justify-center">
      <form className="sm:w-[70%] w-[90%] max-w-3xl flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          id="searchterm"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent border-[1px] px-1 py-1 text-lg border-gray-400   focus:outline-none text-gray-500"
        />
        <button
          className={`border-[1px] border-gray-400 px-3 py-1 border-l-0 ${
            searchTerm ? "cursor-pointer bg-yellow-500" : "cursor-default"
          }`}
        >
          <FaSearch className="text-2xl" />
        </button>
      </form>
    </div>
  );
}
