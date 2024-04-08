"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Suspense } from "react";

export default function Navbar() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Suspense>
      <div className=" flex justify-center gap-8 sm:gap-10 md:gap-20 text-xl font-semibold text-gray-700 dark:text-yellow-500 my-3 border-b-[1px] items-center border-b-gray-500 pb-2">
        <Link
          href={"/?genre=fetchTrending"}
          className={`hover:text-yellow-600 ${
            genre === "fetchTrending"
              ? "underline underline-offset-8 decoration-yellow-500 decoration-4"
              : ""
          }`}
        >
          Trending
        </Link>
        <Link
          href={"/?genre=fetchTopRated"}
          className={`hover:text-yellow-600 ${
            genre === "fetchTopRated"
              ? "underline underline-offset-8 decoration-yellow-500 decoration-4"
              : ""
          }`}
        >
          Top Rated
        </Link>
      </div>
    </Suspense>
  );
}
