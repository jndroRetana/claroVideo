/** @format */
import PropTypes from "prop-types";

import { WrapperDetails } from "./styles";
import CardDetails from "../CardDetails";
export default function Details({ setShowDetails }) {
  return (
    <>
      <WrapperDetails>
        <CardDetails setShowDetails={setShowDetails} />
      </WrapperDetails>
    </>
  );
}

Details.propTypes = {
  setShowDetails: PropTypes.func,
};
