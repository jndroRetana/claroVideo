/** @format */

import { WrapperDetails } from "./styles";
import CardDetails from "../CardDetails";
export default function Details({ setShowDetails, details }) {
  return (
    <>
      <WrapperDetails>
        <CardDetails setShowDetails={setShowDetails} details={details} />
      </WrapperDetails>
    </>
  );
}
