import Results from "@/components/Results";
import React from "react";
import { ImSad } from "react-icons/im";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=true`
  );

  const data = await res.json();

  const results = data.results;

  return (
    <div>
      {results.length === 0 && (
        <div className="flex flex-col mt-10 items-center justify-center">
          <h1 className="text-center mt-20 text-2xl md:text-3xl font-semibold">
            No results found!
          </h1>
          <ImSad className="text-3xl md:text-4xl mt-4" />
        </div>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
