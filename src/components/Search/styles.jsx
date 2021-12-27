/** @format */

import styled from "styled-components";

export const WrapperSearch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-right: 25px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    justify-content: end;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 30px;
  font-size: 22px;
  @media (min-width: 768px) {
    width: 60%;
  }
`;
