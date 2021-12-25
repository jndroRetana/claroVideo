/** @format */
import { useState, useEffect } from "react";
import { WrapperInfo, CloseImage, TextInfo, MovieImage } from "./styles";
import closeImage from "../../assets/ex.png";

export default function CardDetails({ setShowDetails, details }) {
  const [media, setMedia] = useState([]);
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [producers, setProducers] = useState([]);
  const [writers, setWriters] = useState([]);

  const getNames = (role, roleName) => {
    const target = role?.filter(({ name }) => name === roleName);
    let auxNames = [];

    if (target?.length > 0) {
      target[0]?.talents?.talent?.map(({ fullname }) => {
        auxNames = [...auxNames, fullname];
      });

      return auxNames;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const role = details?.extendedcommon?.roles?.role;
    setMedia(details?.extendedcommon?.media);
    setGenres(details?.extendedcommon?.genres);
    setActors(getNames(role, "Actor"));
    setDirectors(getNames(role, "Director"));
    setProducers(getNames(role, "Productor"));
    setWriters(getNames(role, "Writer"));
  }, [details]);

  const handleClose = async () => {
    setShowDetails(false);
  };
  return (
    <>
      <WrapperInfo>
        <CloseImage src={closeImage} onClick={handleClose} />
        <MovieImage />
        <TextInfo>{details?.title}</TextInfo>
        <TextInfo>{`(${media?.publishyear}) ${media?.duration} ${media?.rating?.code}`}</TextInfo>

        <TextInfo>{`Genero: `}</TextInfo>
        {genres?.genre?.map(({ desc }) => (
          <TextInfo>{`${desc}`}</TextInfo>
        ))}

        <TextInfo>{`Actores:`}</TextInfo>
        {actors?.map((desc) => (
          <TextInfo>{`${desc}`}</TextInfo>
        ))}
        <TextInfo>{`Directo:`}</TextInfo>
        {directors?.map((desc) => (
          <TextInfo>{`${desc}`}</TextInfo>
        ))}
        <TextInfo>{`Escritor:`}</TextInfo>
        <TextInfo>{`Producto:`}</TextInfo>
        {producers?.map((desc) => (
          <TextInfo>{`${desc}`}</TextInfo>
        ))}
        <TextInfo>{`Titulo original:`}</TextInfo>
      </WrapperInfo>
    </>
  );
}
