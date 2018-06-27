import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillRecevieProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'hello',
    movies: [
      {
        title: "matrix",
        poster: "https://i.pinimg.com/originals/93/ee/87/93ee871fa099e39a85b7d8f90f9512b0.jpg"
      },
      {
        title: "full metar jacket",
        poster: "http://fr.web.img5.acsta.net/medias/nmedia/18/65/57/12/19254508.jpg",
      },
      {
        title: "old boy",
        poster: "https://i.pinimg.com/originals/00/f2/51/00f251b177f602535ba5d6ac067a747f.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'hello again'
      })
    }, 5000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
