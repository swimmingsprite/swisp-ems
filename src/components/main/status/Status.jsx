import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import TwoLineTextTime from "../TextLines"
import StatusContent from "./StatusContent"
import CommentsList from "../comments/CommentsList"
import PostEmojis from "./PostEmojis"
import {useDispatch, useSelector} from "react-redux";
import {isPostLiked, isZeroPostInteraction} from "../../../logic/Posts";


export default function Status(props) {
    var dispatch = useDispatch();
    var userId = useSelector(state => state.userReducer.id);
    let avatarStyle = props.post.avatarImg ? {backgroundImage: props.post.avatarImg} : {backgroundColor: props.post.avatarColor};
    let currentUserIsAuthor = userId === props.post.authorId

    console.log("AVATAR STYLE: "+Object.keys(avatarStyle))

    return <div className="post-status-bar">

        {/*delete button*/}
        {currentUserIsAuthor
        && <div className="delete-button"
                onClick={() => {dispatch({
                    type: "POST_DELETE",
                    postId: props.post.id
                })}}
        >x</div>}



        <Avatar className="post-avatar" style={
            {
                height: "30px",
                width: "30px",
                transform: "translateY(10%)",
                left: "5px",
                // objectFit: "contain",
                backgroundColor: avatarStyle.backgroundColor,


            }}
        src={avatarStyle.backgroundImage}
        >{props.post.author.charAt(0)}
        </Avatar>

        <TwoLineTextTime
            header={props.post.author}
            text={props.post.authorRole}
            time={props.post.timestamp}
        />

        {/*todo onLikeClick send to server before dispatch*/}
        <StatusContent buttons={true}
                       text={props.post.text}
                       postId={props.post.id}
                       limit={props.post.commentsLimit}
                       commentsLength={props.post.comments.length}
                       onLikeClick={() => dispatch({type: "POST_LIKE_TOGGLE", postId: props.post.id, userId: userId})}
                       onCommentsClick={(val) => dispatch({
                           type: "COMMENTS_LIMIT_SET",
                           postId: props.post.id,
                           value: val
                       })}
                       liked={isPostLiked(props.post, userId)}
        />

        {!isZeroPostInteraction(props.post) && <PostEmojis
            likes={props.post.likes.length}
            comments={props.post.comments.length}
        />}

        <CommentsList list={props.post.comments}
                      limit={props.post.commentsLimit}
                      postId={props.post.id}
                      commentsCount={props.post.commentsCount}
        />


    </div>

}