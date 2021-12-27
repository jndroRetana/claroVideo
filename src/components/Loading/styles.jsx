/** @format */

import styled from "styled-components";
import { WrapperDetails } from "../Details/styles";

export const WrapperLoading = styled(WrapperDetails)`
  background-color: #010101;
  overflow-y: none;
`;

export const Loader = styled.img`
  position: relative;
  width: 60%;
  top: 35%;
  left: 20%;
  @media (min-width: 573px) {
    width: 20%;
    top: 35%;
    left: 40%;
  }

  @media (min-width: 1444px) {
    top: 25%;
    left: 40%;
  }
`;
