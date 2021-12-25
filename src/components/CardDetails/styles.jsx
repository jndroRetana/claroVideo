/** @format */

import styled from "styled-components";

export const WrapperInfo = styled.div`
  //TODO: change size
  width: 50%;
  height: auto;
  background-color: black;
  border-radius: 5px;
  padding: 20px;
  margin: 30px 0;
  position: relative;
`;

export const CloseImage = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
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
`;

export const WrapperData = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  row-gap: 10px;
  padding: 20px;
  align-items: center;
`;

export const WrapperExtraInfo = styled(WrapperData)``;

export const WrapperDescription = styled.div`
  padding: 0 20px 20px 20px;
`;
