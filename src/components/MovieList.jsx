import React from 'react'

export default function MovieList({movieList}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 w-full max-w-5xl">
        {movieList.map((movie) => (
          <div key={movie.imdbID} className="border p-2 rounded shadow text-center">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              className="w-full h-64 object-cover rounded mb-2"
            />
            <h3 className="font-semibold">{movie.Title}</h3>
            <p className="text-sm text-gray-600">{movie.Year}</p>
          </div>
        ))}
      </div>
  )
}
