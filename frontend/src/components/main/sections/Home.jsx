import React from 'react';
import Title from "../title/Title"
import PostStatusBar from "../status/PostStatusBar"
import Status from "../status/Status"
import {useDispatch, useSelector} from "react-redux";
import {elementTimestampCompareTo} from "../../../logic/Posts";

export default function Home(props) {


    /* todo fetch status list, from redux */

    var posts = useSelector(state => state.postReducer)
    var user = useSelector(state => state.userReducer);
    var dispatch = useDispatch();


    function onNewStatus(newStatusString) {
        /*todo, post new status on server and fetch statusId and timestamp*/
        /*todo dispatch post from server to redux*/

        var newPost = {
            id: Math.floor(Math.random()*1000000000), //from server
            authorId: user.id,
            author: user.name,
            authorRole: user.employeeRole,
            avatarColor: user.avatarColor,
            avatarImg: user.avatarImg,
            text: newStatusString,
            timestamp: new Date().getTime(),
            comments: [],
            likes: [],
            commentsLimit: 0
        }

        dispatch({type: "POST_ADD", post: newPost})

    }



    return (
        <div>
            <Title text="Príspevky"/>
            <PostStatusBar onNewStatus={onNewStatus}/>
            {posts
                .sort(elementTimestampCompareTo)
                .reverse()
                .map((post) => {
                    // console.log("POST ID JE: "+post.id)
                    return <Status post={post}
                                       key={post.id}/>
            }
                                       )}
        </div>
    );
}

