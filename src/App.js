import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title:  "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
  },
  {
    title:  "Full Metel Jacket",
    poster: "http://mblogthumb1.phinf.naver.net/data18/2007/1/6/4/full_metal_jacket_manif-inde9898.jpg?type=w210",
  },
  {
    title:  "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/4/48/Old_Boy.jpg/250px-Old_Boy.jpg",
  },
  {
    title:  "Star Wars",
    poster: "http://moonhak.co.kr/home/wp-content/uploads/bookcover/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EC%94%A8%EB%84%A4%EC%95%84%ED%8A%B84_%ED%91%9C1_web.jpg"
  },

]

class App extends Component {

  state = {
    gretting: "Hello!"
  }
  
  componentDidMount(){
    setTimeout(() => {
        this.setState({
          gretting: 'Hello again!'
        })
    },5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.gretting}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
