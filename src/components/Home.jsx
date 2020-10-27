import React from 'react';
import Title from "../components/Title"
import PostStatusBar from "../components/PostStatusBar"
import Status from "../components/main/Status"

export default function Home(props) {
    /* status list */

    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar />
            <Status />
            <Status />
            

        </div>
    );
}