import React from "react";
import styled from "styled-components";

import logoImageUrl from "../assets/logo.svg";

const LogoImage = styled.img.attrs(props => ({ src: logoImageUrl }))`
  width: 384px;
`;

const HeroText = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;

  font-family: "Roboto Slab", serif;
  font-size: 96pt;
  color: #829ac4;
  letter-spacing: 25px;
`;

const ButtonRow = styled.div`
  > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;

  background: #7289da;

  font-size: 20pt;
  color: #ffffff;
`;

const DiscordButton = styled(Button)``;

const DestinyButton = styled(Button)``;

export default function App() {
  return (
    <>
      <LogoImage />
      <HeroText>Exo/Terra</HeroText>
      <ButtonRow>
        <DiscordButton>Join us on Discord</DiscordButton>
        <DestinyButton>Join our clan</DestinyButton>
      </ButtonRow>
    </>
  );
}
