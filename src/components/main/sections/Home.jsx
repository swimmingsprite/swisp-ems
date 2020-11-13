import React from 'react';
import Title from "../Title"
import PostStatusBar from "../status/PostStatusBar"
import Status from "../status/Status"

export default function Home(props) {


    /* todo fetch status list, from redux */

    const [statusList, setStatusList] = React.useState([]);



    function onNewStatus(newStatusString) {
        /*post new status on server and fetch statusId and timestamp*/

        var newStatus = {
            statusId: Math.floor(Math.random() * 100000000),
            text: newStatusString,
            timestamp: new Date().getTime(),
            emojiValues: {
                likesValue: 0,
                commentsValue: 0
            }
            // ,likes: {id1, id2, id3}
            ,author: "John Barney"
            ,authorId: 1236545454
            ,authorRole: "shop manager"
        }


        setStatusList([newStatus ,...statusList])

    }


    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar onNewStatus={onNewStatus} />
            {statusList.map((status) => <Status values={status}
                                                key={status.statusId}
            />)}
        </div>
    );
}

