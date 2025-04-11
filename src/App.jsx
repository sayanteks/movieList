import { useEffect, useState } from 'react'
import './App.css'
import {createBrowserRouter, Routes, Route, BrowserRouter} from "react-router-dom"
import ListingPage from './components/ListingPage';
import MovieDetails from './components/MovieDetails';


function App() {

  const[watchedList, setWatchedList]= useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/listingpage' element={<ListingPage />} />
        <Route path='/moviedetails' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
