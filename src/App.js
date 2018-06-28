import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillRecevieProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'hello',
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
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
            },
            {
              title: "trainspotting",
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHoWC2d7UF6xrRP5dlloaB_Hmbn5uvfNkJVBCAzgGK-h7b4Rn"
            }
          ]
      })
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loding'}
      </div>
    );
  }
}

export default App;
