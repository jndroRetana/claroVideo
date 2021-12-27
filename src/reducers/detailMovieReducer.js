/** @format */

export default function detailMovieReducer(state = {}, action) {
  switch (action.type) {
    case "GET_DETAIL_MOVIE":
      return action.payload;

    default:
      return state;
  }
}
