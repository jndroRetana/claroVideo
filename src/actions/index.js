/** @format */
import { fetchMovies } from "../services/getList";
import { getDetails } from "../services/getDetails";

export const getMovies = () => {
  return async (dispatch) => {
    const data = await fetchMovies();
    dispatch({ type: "ALL_MOVIES", payload: data });
  };
};

export const filterMovies = (text, data) => {
  return { type: "FILTER_MOVIES", payload: { text, data } };
};

export const getDetailsMovie = (id) => {
  return async (dispatch) => {
    const data = await getDetails(id);
    dispatch({ type: "GET_DETAIL_MOVIE", payload: data.data ?? {} });
  };
};
