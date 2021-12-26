/** @format */

import styled from "styled-components";

export const WrapperInfo = styled.div`
  //TODO: change size
  width: 90%;
  height: auto;

  background-color: black;
  border-radius: 5px;

  position: relative;
  @media (min-width: 1024px) {
    width: 70%;
    height: auto;
    padding: 20px;
    margin: 30px 0;
  }
  @media (min-width: 1444px) {
    width: 60%;
  }
`;

export const CloseImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const MovieImage = styled.img``;

export const TextInfo = styled.p`
  margin: 0;
  color: white;
`;

export const TextInfoTitle = styled(TextInfo)`
  color: yellow;
  font-size: 25px;
`;

export const WrapperTextInfo = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  ${TextInfo} {
    width: auto;
    padding: 5px;
    border: 1px solid white;
    border-radius: 3px;
    margin: 0 0 5px 5px;
  }
`;

export const WrapperMediaInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2px;
  ${TextInfo} {
    margin-right: 30px;
  }
`;

export const WrapperData = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  column-gap: 20px;
  row-gap: 10px;
  padding: 20px;
  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    align-items: center;
  }
  /* display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  row-gap: 10px;
  padding: 20px;
  align-items: center; */
`;

export const WrapperExtraInfo = styled(WrapperData)``;

export const WrapperDescription = styled.div`
  padding: 0 20px 20px 20px;
`;
