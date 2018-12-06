import * as ActionTypes from "actions/actionTypes"

export const fetchMoviesActionCreator = movies => ({
  type: ActionTypes.FETCH_MOVIES,
  all: movies
})

export const fetchMovieActionCreator = index => ({
  type: ActionTypes.FETCH_MOVIE,
  current: index
})
