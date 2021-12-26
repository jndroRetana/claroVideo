/** @format */
import { useEffect, useState } from "react";
import { fetchMovies } from "../../../services/getList";

import {
  Header,
  Logo,
  WrapperSearchHeader,
  HamburgerMenu,
  WrapperSearchMenu,
} from "./styles";
import Search from "../../Search";
import CardList from "../../CardList";
import Details from "../../Details";
import logo from "../../../assets/Imagen.png";
import hMenu from "../../../assets/hMenu.svg";

export default function Home() {
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [view, setView] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetchMovies();
      console.log(response);
      setData(response);
    };
    fetchList();
  }, []);

  const handleHamburgerMenu = () => {
    setView(!view);
  };

  return (
    <>
      {showDetails && (
        <Details
          setShowDetails={setShowDetails}
          details={details}
          setDetails={setDetails}
        />
      )}
      <Header>
        <Logo src={logo} />
        <WrapperSearchHeader>
          <Search />
        </WrapperSearchHeader>
        <HamburgerMenu src={hMenu} onClick={handleHamburgerMenu} />
      </Header>
      <WrapperSearchMenu view={view}>
        <Search />
      </WrapperSearchMenu>
      <CardList
        data={data}
        setShowDetails={setShowDetails}
        setDetails={setDetails}
      />
    </>
  );
}
