import React from 'react';

export default function Logo(props) {

    return (
        <img className="logo-img" src={props.imgSrc} alt="logo" />
    );
}