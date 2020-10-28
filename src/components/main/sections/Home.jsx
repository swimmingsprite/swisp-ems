import React from 'react';
import Title from "../Title"
import PostStatusBar from "../status/PostStatusBar"
import Status from "../status/Status"

export default function Home(props) {



    const [statusList, setStatusList] = React.useState([
        /*<Status />,
        <Status />*/
    ]);


    /* fetch status list */

    function onNewStatus(newStatusString) {
        console.log("NEW STATUS STRING: "+newStatusString);
        setStatusList([ <Status text={newStatusString}/> ,...statusList])

        /*setStatusInput(event.target.value);*/
    }


    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar onNewStatus={onNewStatus} />
            {/*{statusList.map((status) => <Status />)};*/}
            {statusList}



        </div>
    );
}

