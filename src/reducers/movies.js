import { handleActions } from "redux-actions"
import * as ActionTypes from "actions/actionTypes"

export default handleActions(
  {
    [ActionTypes.FETCH_MOVIES]: (state, action) => {
      console.log("FETCH_MOVIES===<")
      console.log(state)
      console.log(action)
      return {
        ...state,
        all: action.all
      }
    },
    [ActionTypes.FETCH_MOVIE]: (state, action) => {
      console.log("FETCH_MOVIE===>")
      console.log(state)
      console.log(action)
      return {
        ...state,
        current: state.all[action.current - 1]
      }
    }
  },
  {
    movies: [],
    movie: {}
  }
)
