import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="w-screen text-center my-4 text-3xl font-bold text-yellow-500 md:text-4xl ">
        About{" "}
      </h1>
      <div className="text-lg md:text-xl px-4 flex flex-col gap-4 text-center max-w-[1000px] mb-10">
        <p>
        Welcome to MovieMap, where our mission is to navigate you through the
        vast landscape of cinema with precision and insight. With an extensive
        collection of movie reviews, trailers, and exclusive behind-the-scenes
        content, MovieMap is your trusted companion on your cinematic adventure.
        Whether you're seeking the latest blockbuster hit or searching for
        hidden gems from the past, our curated platform offers something for
        every movie lover.
      </p>
      <p>
        At MovieMap, we understand that the magic of film extends far beyond the
        screen. That's why we delve deep into the stories behind the movies,
        bringing you fascinating trivia, interviews with cast and crew, and
        analysis of filmmaking techniques. Our dedicated team of movie
        enthusiasts is committed to providing you with rich, immersive content
        that enhances your appreciation of the art of cinema.
      </p>
      <p>
        Join the MovieMap community and embark on a journey of discovery,
        exploration, and celebration of all things cinematic. With our
        user-friendly interface and personalized recommendations, we make it
        easy for you to find your next favorite movie and connect with fellow
        film enthusiasts. Whether you're a casual movie buff or a seasoned
        cinephile, MovieMap is your ultimate destination for all things movies.
      </p>
      </div>
      
    </div>
  );
}
