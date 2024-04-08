import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group border-[1px] border-gray-500 rounded-md  hover:shadow-gray-500 hover:shadow-md transition-shadow duration-300 overflow-hidden relative">
      <Link href={`/movie/${result.id}`}>
        <h1 className="text-2xl font-semibold uppercase absolute left-2 -top-16 line-clamp-2 lg:group-hover:top-3 transition-all duration-300 z-20 text-gray-100 ease-linear">
          {result.title || result.name}
        </h1>
        <div className="absolute h-0 w-full bg-gradient-to-b from-black to-transparent z-10 lg:group-hover:h-[60%] transition-all ease-linear duration-200"></div>
        <img
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          alt="aldf"
          className="h-[230px] w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
        />

        <div className="px-2 py-1">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="text-xl font-bold line-clamp-1">
            {result.title || result.name}
          </h2>
          <p className="flex items-center justify-between text-xs mt-2 text-gray-500">
            {result.release_date || result.first_air_date}
            <div className="flex items-center gap-1">
              <FiThumbsUp /> {result.vote_count}
            </div>
          </p>
        </div>
      </Link>
    </div>
  );
}
