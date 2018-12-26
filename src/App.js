import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  "Matrix",
  "Full Metel Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg",
  "http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210",
  "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",
  "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]}/>
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>
        <Movie title={movies[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
