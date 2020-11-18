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
            <div className={"comment-status-bar comment-bar"}>

                {userId === props.comment.authorId && <div className="delete-button-comment"
                                                        onClick={() => {dispatch({
                                                            type: "COMMENT_DELETE",
                                                            postId: props.postId,
                                                            commentId: props.comment.id
                                                        })}}
                >x</div>}

            <Avatar className="comment-avatar" style={
                {height: "20px", 
                width: "20px", 
                backgroundColor: props.comment.avatarColor
                }}>
            </Avatar>

            <OneLineTextTime header={props.comment.author} time={props.comment.timestamp} style={{top: "5px", position: "relative"}}/>

            <StatusContent
                buttons={false}
                text={props.comment.text}
                statusId={props.postId}
            />
            
        
            


            
        </div>

        </li>
    );
}