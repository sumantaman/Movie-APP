import React from 'react'
import './App.css'
import Fire from './assets/fire.png'
import Star from './assets/star.png'
import Party from './assets/party-face.png'
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieLists/MovieList'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList  type="popular" title="Popular"  emoji={Fire}/>
      <MovieList  type="top_rated" title="Top Rated"  emoji={Star} />
      <MovieList  type="upcoming" title="Up Coming"  emoji={Party} />

      {/* <MovieList  type="top_rated" title="Top-Rated"  emoji={Star}/>
      <MovieList  type="upcomming" title="Upcomming"  emoji={Party}/> */}
    </div>
  )
}

export default App
