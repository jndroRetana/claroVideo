/** @format */
import PropTypes from "prop-types";

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
import { useSelector, useDispatch } from "react-redux";
import { getDetailsMovie } from "../../actions";
import Loading from "../Loading";

export default function CardDetails({ setShowDetails }) {
  const [image, setImage] = useState();
  const [media, setMedia] = useState([]);
  const [genres, setGenres] = useState([]);
  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [producers, setProducers] = useState([]);
  const [writers, setWriters] = useState([]);

  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const getNames = (role, roleName) => {
    const target = role?.filter(({ name }) => name === roleName);
    let auxNames = [];

    if (target?.length > 0) {
      target[0]?.talents?.talent?.map(
        ({ fullname }) => (auxNames = [...auxNames, fullname])
      );

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
    dispatch(getDetailsMovie(0));
  };

  return (
    <>
      <WrapperInfo>
        {!image ? (
          <Loading />
        ) : (
          <>
            <CloseImage
              data-testid='close'
              src={closeImage}
              onClick={handleClose}
              alt='cerrar'
            />
            <WrapperData>
              <MovieImage src={image ?? ""} alt='img-movie' />
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
                    {genres?.genre?.map(({ desc }, index) => (
                      <TextInfo key={index}>{`${desc}`}</TextInfo>
                    ))}
                  </WrapperTextInfo>
                  <TextInfo>{`Actores:`}</TextInfo>
                  <WrapperTextInfo>
                    {actors?.map((desc, index) => (
                      <TextInfo key={index}>{`${desc}`}</TextInfo>
                    ))}
                  </WrapperTextInfo>
                  <TextInfo>{`Directo:`}</TextInfo>
                  <WrapperTextInfo>
                    {directors?.map((desc, index) => (
                      <TextInfo key={index}>{`${desc}`}</TextInfo>
                    ))}
                  </WrapperTextInfo>
                  <TextInfo>{`Escritor:`}</TextInfo>
                  <WrapperTextInfo>
                    {writers?.map((desc, index) => (
                      <TextInfo key={index}>{`${desc}`}</TextInfo>
                    ))}
                  </WrapperTextInfo>
                  <TextInfo>{`Productor:`}</TextInfo>
                  <WrapperTextInfo>
                    {producers?.map((desc, index) => (
                      <TextInfo key={index}>{`${desc}`}</TextInfo>
                    ))}
                  </WrapperTextInfo>
                </WrapperExtraInfo>
              </div>
            </WrapperData>
            <WrapperDescription>
              <TextInfo>{details?.large_description ?? ""}</TextInfo>
            </WrapperDescription>
          </>
        )}
      </WrapperInfo>
    </>
  );
}

CardDetails.propTypes = {
  setShowDetails: PropTypes.func,
};
