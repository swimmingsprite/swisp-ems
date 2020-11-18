import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {OneLineTextTime} from "../../main/TextLines"
import StatusContent from "../status/StatusContent"
import {useDispatch, useSelector} from "react-redux";

export default function Comment(props) {
    var dispatch = useDispatch();
    var userId = useSelector(state => state.userReducer.id)


    return (
        <li className="comment-li">
            <div className={"post-status-bar comment-bar"}>

                {userId === props.comment.authorId && <div className="delete-button-comment"
                                                        onClick={() => {dispatch({
                                                            type: "COMMENT_DELETE",
                                                            postId: props.postId,
                                                            commentId: props.comment.id
                                                        })}}
                >x</div>}

            <Avatar className="post-avatar" style={
                {height: "20px", 
                width: "20px", 
                backgroundColor: props.comment.avatarColor,
                transform: "translateY(0%)"
                }}>
            </Avatar>

            <OneLineTextTime header={props.comment.author} time={props.comment.timestamp}/>

            <StatusContent
                buttons={false}
                text={props.comment.text}
                statusId={props.postId}
            />
            
        
            


            
        </div>

        </li>
    );
}