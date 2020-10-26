import React from 'react';
import Logo from "../components/Logo"
import Paragraph from "../components/Paragraph"

export default function LogoText(props) {
  
  return (
    <div className="logo-text">
        <Logo imgSrc={props.imgSrc}/>
        <Paragraph text={props.text} paragraphClass="logo-paragraph"/>
    </div>
  );
}