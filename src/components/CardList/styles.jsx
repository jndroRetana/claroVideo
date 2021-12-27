/** @format */

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  margin: 0 auto;
  @media (min-width: 573px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
