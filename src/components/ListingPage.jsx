import React, { useState, useEffect, useRef } from "react";
import MovieList from "./MovieList";

const KEY = "dc7fd9fb";
const URL = `https://www.omdbapi.com/?apikey=${KEY}&s=`;

export default function ListingPage() {
  const [movieList, setMovieList] = useState([]);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = async () => {
    if (!inputText.trim()) return;

    try {
      const response = await fetch(URL + inputText);
      const data = await response.json();
      if (data.Search) {
        setMovieList(data.Search);
      } else {
        setMovieList([]);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }

    setInputText("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`flex flex-col items-center w-full px-4 mt-20`}>
      <div className="flex w-full max-w-2xl gap-4">
        <input
          className="border rounded px-4 py-2 w-full"
          type="text"
          placeholder="Search a movie"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button
          className="bg-blue-600 rounded-xl px-4 py-2 text-white"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Display movie results */}
      <MovieList movieList={movieList}/>
    </div>
  );
}
