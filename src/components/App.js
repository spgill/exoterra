import React from "react";
import styled from "styled-components";

import logoImageUrl from "../assets/logo.svg";
import destiny2LogoUrl from "../assets/destiny2.svg";
import discordLogoUrl from "../assets/discord.svg";

const LogoImage = styled.img.attrs(props => ({ src: logoImageUrl }))`
  width: 384px;
`;

const BigHeroText = styled.h1`
  margin: 0;

  font-family: "Roboto Slab", serif;
  font-size: 96pt;
  font-weight: 600;
  color: #829ac4;
  letter-spacing: 25px;
  text-align: center;
`;

const SmallHeroText = styled(BigHeroText)`
  font-size: 32pt;
  letter-spacing: 12px;
`;

const ButtonRow = styled.div`
  margin-top: 3rem;

  > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

const ButtonLink = styled.a`
  position: relative;

  transition: 300ms;

  border: none;
  border-radius: 2px;
  padding: 0.75rem;

  font-family: sans-serif;
  font-size: 20pt;
  text-decoration: none;
  color: white;
  opacity: 0.9;

  cursor: pointer;

  &:visited {
    color: white;
  }

  &::after {
    content: "";

    display: block;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transition: 300ms;

    border: 1px solid white;
    border-radius: 2px;

    pointer-events: none;
  }

  &:hover::after,
  &:focus::after {
    top: -0.5rem;
    right: -0.5rem;
    bottom: -0.5rem;
    left: -0.5rem;

    border-color: white;
    border-radius: 8px;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    opacity: 1;
    color: white;
    text-decoration: none;
  }

  > img {
    height: 1em;

    vertical-align: text-top;
  }
`;

const DiscordButtonLink = styled(ButtonLink)`
  background: #7289da;

  &::after {
    border-color: #9eb3ff;
  }
`;

const DestinyButtonLink = styled(ButtonLink)`
  background: rgba(183, 140, 37);

  &::after {
    border-color: #ffce1f;
  }
`;

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <LogoImage className="col-4 offset-4" />
      </div>
      <div className="row">
        <BigHeroText className="col-12 d-none d-lg-block d-xl-block">
          Exo/Terra
        </BigHeroText>
        <SmallHeroText className="col-12 d-lg-none d-xl-none">
          Exo/Terra
        </SmallHeroText>
      </div>
      <div className="row justify-content-md-center mt-5">
        <DiscordButtonLink
          className="col-10 offset-1 col-lg-4 offset-lg-0 mb-2"
          href="https://discord.gg/3eEeRbS"
          target="_blank">
          <img src={discordLogoUrl} aria-hidden={true} /> Join us on Discord
        </DiscordButtonLink>
        <div
          className="col-lg-1"
          aria-hidden={true}
          style={{ visibility: "hidden" }}
        />
        <DestinyButtonLink
          className="col-10 offset-1 col-lg-4 offset-lg-0 mb-2"
          href="https://www.bungie.net/en/ClanV2/Chat?groupId=3220152"
          target="_blank">
          <img src={destiny2LogoUrl} aria-hidden={true} /> Join our clan
        </DestinyButtonLink>
      </div>
    </div>
  );
}
