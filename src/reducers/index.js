/** @format */

import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import filterMoviesReducer from "./filterMoviesReducer";
import detailMovieReducer from "./detailMovieReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  filter: filterMoviesReducer,
  detail: detailMovieReducer,
});

export default rootReducer;
