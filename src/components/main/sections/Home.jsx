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
        /*post new status on server and fetch statusId and timestamp*/

        var newStatus = {
            statusId: Math.floor(Math.random() * 100000000),
            text: newStatusString,
            timestamp: new Date().getTime()
        }


        setStatusList([newStatus ,...statusList])

    }


    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar onNewStatus={onNewStatus} />
            {statusList.map((status) => <Status text={status.text}
                                                statusId={status.statusId}
                                                key={status.statusId}  />)}
        </div>
    );
}

