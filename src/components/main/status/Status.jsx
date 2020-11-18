import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../TextLines"
import StatusContent from "./StatusContent"
import CommentsList from "../comments/CommentsList"
import PostEmojis from "./PostEmojis"
import {useDispatch, useSelector} from "react-redux";



export default function Status(props) {
    var dispatch = useDispatch();
    var userId = useSelector(state => state.userReducer.id);

    function isZeroPostInteraction(post) {
        return !(post.likes.length || post.comments.length > 0);
    }

    return (
        <div className="post-status-bar">
            <Avatar className="post-avatar" style={
                {height: "30px", 
                width: "30px", 
                backgroundColor: "red",
                transform: "translateY(10%)",
                backgroundImage: "url("+props.src+")"
                }}>
            </Avatar>

            <TwoLineTextTime 
            header={props.post.author}
            text={props.post.authorRole}
            time={props.post.timestamp}
            />

            {/*todo onLikeClick send to server before dispatch, onCommentClick set commentsLimitTo 5*/}
            <StatusContent buttons={true} text={props.post.text} postId={props.post.id}
                onLikeClick={() => dispatch({type: "POST_LIKE_TOGGLE", postId: props.post.id, userId: userId}) }
                onCommentsClick={() => dispatch({type: "COMMENTS_LIMIT_SET", postId: props.post.id, value: 5 })}
            />

            {!isZeroPostInteraction(props.post) && <PostEmojis
                likes={props.post.likes.length}
                comments={props.post.comments.length}
            />}

            <CommentsList list={props.post.comments} limit={props.post.commentsLimit}  />
            


            
        </div>
    );
}