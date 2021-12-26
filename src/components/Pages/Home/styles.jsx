/** @format */

import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    align-items: end;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 20%;
  height: 20%;
`;

export const WrapperSearchHeader = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
export const WrapperSearchMenu = styled.div`
  display: ${({ view }) => (view ? "block" : "none")};
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;
