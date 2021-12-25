/** @format */
import { useEffect, useState } from "react";
import { fetchMovies } from "../../../services/getList";

import { Header, Logo } from "./styles";
import Search from "../../Search";
import CardList from "../../CardList";
import Details from "../../Details";
import logo from "../../../assets/Imagen.png";
export default function Home() {
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchList = async () => {
      const response = await fetchMovies();
      console.log(response);
      setData(response);
    };
    fetchList();
  }, []);
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
        <Search />
      </Header>
      <CardList
        data={data}
        setShowDetails={setShowDetails}
        setDetails={setDetails}
      />
    </>
  );
}
