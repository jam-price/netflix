import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import requests from "./requests";
import Row from "./components/Row/Row";
import Billboard from './components/Billboard/Billboard'

function App() {
  return (
    <div className="App">
      <Nav />
      <Billboard />
      <Row title="Trending Now" request={requests.trending} />
      <Row title="Netflix Originals" request={requests.netflixOriginals}/>
      <Row title="Top Rated Movies" request={requests.topRatedMovie}/>
      <Row title="Top Rated TV" request={requests.topRatedTv}/>
      <Row title="Action Films" request={requests.actionMovies}/>
      <Row title="Comedy Films" request={requests.comedyMovies}/>
      <Row title="Horror Films" request={requests.horrorMovies}/>
      <Row title="Romance Films" request={requests.romanceMovies}/>
      <Row title="Documentaries" request={requests.documentaries}/>
    </div>
  );
}

export default App;
