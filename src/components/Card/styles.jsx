/** @format */

import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
//TODO: Remove gradient
export const Gradient = styled.div`
  display: none;
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    00deg,
    rgba(0, 0, 0, 1) 37%,
    rgba(124, 124, 125, 1) 46%,
    rgba(251, 251, 251, 1) 100%
  );
  opacity: 0.4;
`;
export const PlusImage = styled.img``;
export const DetailsButton = styled.div`
  display: none;
  color: white;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 10px 10px 0;
  border-radius: 50%;
  border: 2px solid white;
  :hover {
    cursor: pointer;
  }
`;

export const WrapperCard = styled.div`
  position: relative;
  width: 100%;
  height: 190px;
  border-radius: 5px;
  :hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    overflow: hidden;
    z-index: 100;
    ${DetailsButton} {
      display: block;
    }
  }
`;
