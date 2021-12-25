/** @format */
import PropTypes from "prop-types";
import plus from "../../assets/bgGreen.svg";
import {
  WrapperCard,
  Image,
  DetailsButton,
  PlusImage,
  Gradient,
} from "./styles";
import { getDetails } from "../../services/getDetails";
export default function Card({ urlImage, setShowDetails, id, setDetails }) {
  const handleDetails = async (id) => {
    setShowDetails(true);
    const resp = await getDetails(id);
    !resp.error ? setDetails(resp.data) : setDetails({});
  };
  return (
    <>
      <WrapperCard urlImage={urlImage}>
        <Gradient onClick={() => handleDetails(id)} />
        <DetailsButton>
          <PlusImage src={plus} onClick={() => handleDetails(id)} />
        </DetailsButton>
        <Image src={urlImage} />
      </WrapperCard>
    </>
  );
}

Card.propTypes = {
  urlImage: PropTypes.string,
};

Card.defaultProps = {
  urlImage:
    "https://clarovideocdn7.clarovideo.net/PELICULAS/SPYNEXTDOORTHE/EXPORTACION_WEB/SS/SPYNEXTDOORTHEWHORIZONTAL.jpg?size=290x163",
};
