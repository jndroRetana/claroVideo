/** @format */

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case "ALL_MOVIES":
      return [...action.payload];
    default:
      return state;
  }
}
