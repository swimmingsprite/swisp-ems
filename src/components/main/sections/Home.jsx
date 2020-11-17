import React from 'react';
import Title from "../title/Title"
import PostStatusBar from "../status/PostStatusBar"
import Status from "../status/Status"
import {useSelector} from "react-redux";

export default function Home(props) {


    /* todo fetch status list, from redux */

    var posts = useSelector(state => state.postReducer)



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


       // setStatusList([newStatus ,...statusList])

    }


    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar onNewStatus={onNewStatus} />
            {posts.map((post) => <Status post={post}
                                         key={post.id}
            />)}
        </div>
    );
}

