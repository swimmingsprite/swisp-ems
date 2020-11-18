import React from 'react';
import Comment from "../comments/Comment";
import CommentInput from "../input/CommentInput"
import {useDispatch} from "react-redux";
import {elementTimestampCompareTo} from "../../../logic/Posts";
import ShowMoreCommentsPanel from "../status/ShowMoreCommentsPanel";


export default function CommentsList(props) {

    /*do props post id*/

    var comments = props.list;
    var dispatch = useDispatch();
    // var postId = props.postId;

    /* comments.forEach(value => {
         console.log("******comments: "+value.text+" statusId: "+value.statusId);
     })*/


    function handleNewComment(text) {
        /*post async on server and fetch new id and timestamp*/
        /*todo dispatch to redux*/
        /*todo commentsLimit + 1 v reduxe*/

        var newComment = {
            commentId: Math.floor(Math.random() * 10000000),
            statusId: props.statusId,
            text: text,
            timestamp: new Date().getTime()
        }

        dispatch({type: "COMMENT_ADD", postId: props.postId, comment: newComment});

    }

    function showMoreCommentsFilter() {
        /*todo comments.length replace for status commentsCount*/
        if (props.limit !== 0 && props.limit < comments.length) return true;
        return false;
    }

    function handleShowMoreComments() {
        console.log("HANDLE SHOW MORE COMMENTS");
        var difference = comments.length - props.limit;
        var totalDifference = props.commentsCount - comments.length; //vsetky co existuju - vsetky ktore mam = zvysok ktore nemam lokalne

        if (totalDifference > 0) { //ak sa daju nejake stiahnuť
            if (difference > 5) {
                /*ak mam dost lokalnych nastav limit na +5*/
                dispatch({type: "COMMENTS_LIMIT_SET", postId: props.id, value: props.limit + 5});
            }
            if (difference > 0 && difference < 5) {
                /*ak nemas dost lokalnych, nastav limit na +difference a fetchni zbytok zo servera*/
                dispatch({type: "COMMENTS_LIMIT_SET", postId: props.id, value: props.limit + difference});
                /*todo async fetch comments from server, add fetched comments to post comment array*/
            }
        } else {//ak uz mam vsetky lokalne
            if (difference > 5) {/*nastav limit na +5*/
                dispatch({type: "COMMENTS_LIMIT_SET", postId: props.id, value: props.limit + 5});
            }
            if (difference > 0 && difference < 5) {
                /*nastav limit na comments.length, uz nieje co fetchnut zo servera*/
                dispatch({type: "COMMENTS_LIMIT_SET", postId: props.id, value:  comments.length});
            }
        }

    }

    return (


        <ul className="comments-list">

            {/*todo comment delete button if its written by current user*/}
            {showMoreCommentsFilter() && <ShowMoreCommentsPanel onClick={handleShowMoreComments}/>}
            {comments
                .sort(elementTimestampCompareTo)
                .reverse()
                .slice(0, props.limit)
                .reverse()
                .map((comment => <Comment
                    text={comment.text}
                    key={comment.commentId}
                    time={comment.timestamp}
                    postId={props.postId}
                />))}
            <CommentInput onNewStatus={handleNewComment}/>
        </ul>
    );
}