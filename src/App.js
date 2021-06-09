import React from 'react';
import './App.css';
import Row from './components/Row/Row.js';
import request from './components/utils/request.js';
import Banner from './components/Banner/Banner.js';
import NavBar from './components/navBar/NavBar.js';
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending now" fetchUrl={request.fecthTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fecthActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fecthComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fecthHorrowMovies} />
      <Row title="Romantic Movies" fetchUrl={request.fecthRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fecthDocumentaries} />

    </div>
  );
}

export default App;
