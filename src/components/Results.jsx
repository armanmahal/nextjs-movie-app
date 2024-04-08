import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-7 py-4 gap-3 ">
      {results.map((result) => {
        return <Card key={result.id} result={result} />;
      })}
    </div>
  );
}
