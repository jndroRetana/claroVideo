/** @format */

export default function filterMoviesReducer(state = [], action) {
  switch (action.type) {
    case "FILTER_MOVIES":
      const { text, data } = action.payload;

      const filter = data.filter(({ title }) =>
        title.toLowerCase().includes(text.toLowerCase())
      );

      return filter.length > 0 ? filter : null;

    default:
      return state;
  }
}
