import React from 'react';
import LogoText from "../components/LogoText"
import NameAndAvatar from "../components/NameAndAvatar"

export default function Header() {
  
  return (
    <div className="header">
        <LogoText imgSrc="images/swisp-logo.png" text="Podnikový informačný systém (v1.0.0)"> </LogoText>
        <NameAndAvatar/>
    </div>
  );
}