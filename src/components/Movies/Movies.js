import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { fetchMoviesActionCreator } from "actions"
import movies from "movies.json"
import styles from "./Movies.css"

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMoviesActionCreator(movies)
  }

  render() {
    const { children, movies = [], params = {} } = this.props

    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{ backgroundImage: `url(${movie.cover})` }}
              />
            </Link>
          ))}
        </div>
        {children}
      </div>
    )
  }
}

export default connect(
  ({ movies }) => ({
    movies: movies.all
  }),
  {
    fetchMoviesActionCreator
  }
)(Movies)
