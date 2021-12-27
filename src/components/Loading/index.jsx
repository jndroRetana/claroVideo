/** @format */

import { WrapperLoading, Loader } from "./styles";
import loader from "../../assets/bootup.gif";

export default function Loading() {
  return (
    <>
      <WrapperLoading>
        <Loader data-testid='loader' src={loader} alt='loader' />
      </WrapperLoading>
    </>
  );
}
