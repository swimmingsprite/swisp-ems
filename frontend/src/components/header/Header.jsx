import React from 'react';
import LogoText from "./LogoText"
import NameAndAvatar from "./NameAndAvatar"

export default function Header() {
  
  return (
    <div className="header">
        <LogoText imgSrc="images/swisp-logo.png" text="Podnikový informačný systém (v1.0.0)"> </LogoText>
        <NameAndAvatar/>
    </div>
  );
}