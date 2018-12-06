import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchMovieActionCreator } from "actions"
import styles from "./Movie.css"

class Movie extends Component {
  componentDidUpdate() {
    this.props.fetchMovieActionCreator(this.props.params.id)
  }

  componentWillUpdate(next) {
    if (this.props.params.id !== next.params.id) {
      this.props.fetchMovieActionCreator(next.params.id)
    }
  }

  render() {
    const {
      movie = {
        starring: []
      }
    } = this.props

    return (
      <div
        className={styles.movie}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${
            movie.cover
          })`
        }}
      >
        <div
          className={styles.cover}
          style={{ backgroundImage: `url(${movie.cover})` }}
        />
        <div className={styles.description}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.year}</div>
          <div className={styles.starring}>
            {movie.starring.map((actor = {}, index) => (
              <div key={index} className={styles.actor}>
                {actor.name}
              </div>
            ))}
          </div>
        </div>
        <Link className={styles.closeButton} to="/movies">
          ←
        </Link>
      </div>
    )
  }
}

export default connect(
  ({ movies }) => ({
    movie: movies.current
  }),
  {
    fetchMovieActionCreator
  }
)(Movie)
