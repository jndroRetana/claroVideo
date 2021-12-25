/** @format */

import { WrapperDetails } from "./styles";
import CardDetails from "../CardDetails";
export default function Details({ setShowDetails, details, setDetails }) {
  return (
    <>
      <WrapperDetails>
        <CardDetails
          setShowDetails={setShowDetails}
          details={details}
          setDetails={setDetails}
        />
      </WrapperDetails>
    </>
  );
}
