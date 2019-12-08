import React from "react";
import styled from "styled-components";

import logoImageUrl from "../assets/logo.svg";

const LogoImage = styled.img.attrs(props => ({ src: logoImageUrl }))`
  width: 384px;
`;

const HeroText = styled.h1`
  margin-top: 0;

  font-family: "Roboto Slab", serif;
  font-size: 96pt;
  color: #829ac4;
  letter-spacing: 25px;
`;

export default function App() {
  return (
    <>
      <LogoImage />
      <HeroText>Exo/Terra</HeroText>
    </>
  );
}
