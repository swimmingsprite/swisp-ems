import React from 'react';
import Title from "../components/Title"
import PostStatusBar from "../components/PostStatusBar"


export default function Home(props) {

    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar />

        </div>
    );
}