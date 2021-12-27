/** @format */
import { useState } from "react";
import { WrapperSearch, InputSearch } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { filterMovies } from "../../actions";

export default function Search() {
  const [valueSearch, setValueSearch] = useState("");

  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setValueSearch(event.target.value);
    dispatch(filterMovies(event.target.value, movies));
  };

  return (
    <>
      <WrapperSearch>
        <InputSearch
          onChange={handleInput}
          value={valueSearch}
          placeholder='Buscar'
        />
      </WrapperSearch>
    </>
  );
}
