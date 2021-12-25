/** @format */
import PropTypes from "prop-types";

import { Container } from "./styles";
import Card from "../Card/index";

export default function CardList({ data, setShowDetails, setDetails }) {
  return (
    <>
      <Container>
        {data.map(({ id, image_small }) => (
          <Card
            key={id}
            urlImage={image_small}
            setShowDetails={setShowDetails}
            setDetails={setDetails}
            id={id}
          />
        ))}
      </Container>
    </>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
};

CardList.defaultProps = {
  data: [
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
    {
      title: "Mi vecino es un espia",
      image_small:
        "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
    },
  ],
};
