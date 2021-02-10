import React from 'react';
import Logo from "./Logo"
import Paragraph from "./Paragraph"

export default function LogoText(props) {
  
  return (
    <div className="logo-text">
        <Logo imgSrc={props.imgSrc}/>
        <Paragraph text={props.text} paragraphClass="logo-paragraph"/>
    </div>
  );
}