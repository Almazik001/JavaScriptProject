import React from 'react';
import MyButton from "./UI/MyButton/MyButton.jsx";

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post_title'>
                <strong>{props.number}. {props.post.title}</strong>
                <p>{props.post.body}</p>
            </div>

            <div className='post_btns'>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;
