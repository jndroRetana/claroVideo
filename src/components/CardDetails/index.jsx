/** @format */
import { useState, useEffect } from "react";
import {
  WrapperInfo,
  CloseImage,
  TextInfo,
  TextInfoTitle,
  MovieImage,
  WrapperMediaInfo,
  WrapperExtraInfo,
  WrapperData,
  WrapperDescription,
  WrapperTextInfo,
} from "./styles";
import closeImage from "../../assets/ex.png";

export default function CardDetails({ setShowDetails, details, setDetails }) {
  const [image, setImage] = useState("");
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
    setImage(details?.image_medium);
  }, [details]);

  const handleClose = async () => {
    setShowDetails(false);
    setDetails({});
  };
  return (
    <>
      <WrapperInfo>
        <CloseImage src={closeImage} onClick={handleClose} />
        <WrapperData>
          <MovieImage src={image} />
          <div>
            <TextInfoTitle>{details?.title ?? ""}</TextInfoTitle>
            <WrapperMediaInfo>
              <TextInfo>{`(${media?.publishyear ?? ""})`}</TextInfo>
              <TextInfo>{` ${media?.duration ?? ""}`}</TextInfo>
              <TextInfo>{` ${media?.rating?.code ?? ""}`}</TextInfo>
            </WrapperMediaInfo>
            <WrapperExtraInfo>
              <TextInfo>{`Genero: `}</TextInfo>
              <WrapperTextInfo>
                {genres?.genre?.map(({ desc }) => (
                  <TextInfo>{`${desc}`}</TextInfo>
                ))}
              </WrapperTextInfo>
              <TextInfo>{`Actores:`}</TextInfo>
              <WrapperTextInfo>
                {actors?.map((desc) => (
                  <TextInfo>{`${desc}`}</TextInfo>
                ))}
              </WrapperTextInfo>
              <TextInfo>{`Directo:`}</TextInfo>
              <WrapperTextInfo>
                {directors?.map((desc) => (
                  <TextInfo>{`${desc}`}</TextInfo>
                ))}
              </WrapperTextInfo>
              <TextInfo>{`Escritor:`}</TextInfo>
              <WrapperTextInfo>
                {writers?.map((desc) => (
                  <TextInfo>{`${desc}`}</TextInfo>
                ))}
              </WrapperTextInfo>
              <TextInfo>{`Productor:`}</TextInfo>
              <WrapperTextInfo>
                {producers?.map((desc) => (
                  <TextInfo>{`${desc}`}</TextInfo>
                ))}
              </WrapperTextInfo>
            </WrapperExtraInfo>
          </div>
        </WrapperData>
        <WrapperDescription>
          <TextInfo>{details?.large_description ?? ""}</TextInfo>
        </WrapperDescription>
      </WrapperInfo>
    </>
  );
}
