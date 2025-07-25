import React from 'react'
import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/star.png'
import Party from './assets/party-face.png'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieLists/MovieList'
// import MovieDetails from './components/MovieLists/MovieList'

import { Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieLists/MovieDetails';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
       <Routes>
        <Route path="/" element={<MovieList  type="popular" title="Popular"  emoji={Fire}/>} />
        <Route path='/top_rated' element={ <MovieList  type="top_rated" title="Top Rated"  emoji={Star} />}></Route>
        <Route path='/upcoming' element={<MovieList  type="upcoming" title="Up Coming"  emoji={Party} />} />


        <Route path='/movie/:movieId' element={ <MovieDetails /> }/>
       </Routes>
      {/* <MovieList  type="top_rated" title="Top-Rated"  emoji={Star}/>
      <MovieList  type="upcomming" title="Upcomming"  emoji={Party}/> */}
    </div>
  )
}

export default App
