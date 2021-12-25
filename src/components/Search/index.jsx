/** @format */
import { useState } from "react";
import { WrapperSearch, InputSearch, ButtonSearch } from "./styles";

export default function Search() {
  const [valueSearch, setValueSearch] = useState("");
  const handleInput = (event) => {
    setValueSearch(event.target.value);
    console.log(event.target.value);
  };
  const handleSearch = () => {
    alert("hola");
    setValueSearch("");
  };
  return (
    <>
      <WrapperSearch>
        <InputSearch onChange={handleInput} value={valueSearch} />
        <ButtonSearch type='button' onClick={handleSearch}>
          Buscar
        </ButtonSearch>
      </WrapperSearch>
    </>
  );
}
