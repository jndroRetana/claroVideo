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
import { useDispatch } from "react-redux";
import { getDetailsMovie } from "../../actions";

export default function Card({ urlImage, setShowDetails, id }) {
  const dispatch = useDispatch();

  const handleDetails = (id) => {
    dispatch(getDetailsMovie(id));
    setShowDetails(true);
  };

  return (
    <>
      <WrapperCard
        data-testid='card'
        urlImage={urlImage}
        onClick={() => handleDetails(id)}
      >
        <Gradient onClick={() => handleDetails(id)} />
        <DetailsButton>
          <PlusImage src={plus} onClick={() => handleDetails(id)} />
        </DetailsButton>
        <Image src={urlImage ?? ""} />
      </WrapperCard>
    </>
  );
}

Card.propTypes = {
  urlImage: PropTypes.string,
  setShowDetails: PropTypes.func,
  id: PropTypes.number,
};
