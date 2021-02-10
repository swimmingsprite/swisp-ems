import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {OneLineTextTime} from "../../main/TextLines"
import StatusContent from "../status/StatusContent"
import {useDispatch, useSelector} from "react-redux";
import isBase64 from "is-base64";

export default function Comment(props) {
    var dispatch = useDispatch();
    var user = useSelector(state => state.userReducer)
    let avatarStyle = props.comment.avatarImg && isBase64(props.comment.avatarImg, {allowMime: true})
        ? {backgroundImage: props.comment.avatarImg} : {backgroundColor: props.comment.avatarColor};

    console.log("USER ID: "+user.userId);
    console.log("COMMENT AUTHOR ID: "+props.comment.authorId);
    return (
        <li className="comment-li">
            <div className={"comment-status-bar comment-bar"}>


                {/*COMMENT DELETE BUTTON*/}
                {user.id === props.comment.authorId &&
                <div className="delete-button-comment"
                     onClick={() => {
                         /*todo first send request to server*/
                         dispatch({
                             type: "COMMENT_DELETE",
                             postId: props.postId,
                             commentId: props.comment.id
                         })
                     }}
                >x</div>}

                <Avatar className="post-avatar" style={
                    {
                        height: "20px",
                        width: "20px",
                        backgroundColor: avatarStyle.backgroundColor,
                        fontSize: "0.85rem",
                        left: "5px"
                    }}
                        src={avatarStyle.backgroundImage}>
                    {props.comment.author.charAt(0)}
                </Avatar>

                <OneLineTextTime header={props.comment.author} time={props.comment.timestamp}
                                 style={{top: "5px", position: "relative"}}/>

                <StatusContent
                    buttons={false}
                    text={props.comment.text}
                    statusId={props.postId}
                    style={{marginTop: "10px"}}
                />


            </div>

        </li>
    );
}