/** @format */
import PropTypes from "prop-types";

import { Container } from "./styles";
import Card from "../Card/index";

export default function CardList({ data, setShowDetails }) {
  return (
    <>
      <Container data-testid='container-list'>
        {data.map(({ id, image_small }) => (
          <Card
            key={id}
            urlImage={image_small}
            setShowDetails={setShowDetails}
            id={id}
          />
        ))}
      </Container>
    </>
  );
}

CardList.propTypes = {
  data: PropTypes.array,
  setShowDetails: PropTypes.func,
};
