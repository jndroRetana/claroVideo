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
  height: 100%;
  position: absolute;
  bottom: 0;
  background-color: black;
  opacity: 0.5;
`;
export const PlusImage = styled.img``;
export const DetailsButton = styled.div`
  display: none;
  color: white;
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 25%;
  left: 40%;

  margin: 0 10px 10px 0;
  border-radius: 50%;
  opacity: 0.5;
  border: 3px solid white;
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
    ${DetailsButton}, ${Gradient} {
      display: block;
    }
  }
`;
