import React from 'react';
import Title from "../Title"
import PostStatusBar from "../status/PostStatusBar"
import Status from "../status/Status"

export default function Home(props) {
    const [statusList, setStatusList] = React.useState([
        <Status />,
        <Status />
    ]);

    /* fetch status list */

    function changeTest() {
        console.log("CHANGE TEST");
    }


    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar handleChange={changeTest} />
            {statusList.map((status) => <Status />)};



        </div>
    );
}

