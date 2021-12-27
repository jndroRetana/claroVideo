/** @format */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

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
import Loading from "../../Loading";
import logo from "../../../assets/Imagen.png";
import hMenu from "../../../assets/hMenu.svg";
import { getMovies } from "../../../actions";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [view, setView] = useState(false);

  const movies = useSelector((state) => state?.movies);
  const filter = useSelector((state) => state?.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleHamburgerMenu = () => {
    setView(!view);
  };
  if (movies?.length === 0) return <Loading />;
  return (
    <>
      {showDetails && <Details setShowDetails={setShowDetails} />}
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
        data={filter?.length > 0 ? filter : movies}
        setShowDetails={setShowDetails}
      />
    </>
  );
}
