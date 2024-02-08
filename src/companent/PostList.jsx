import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({ posts, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>Списак постов нет</h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center" }}>Посты</h1>
            {posts.map((post, index) => (
                <PostItem key={post.id} post={post} number={index + 1} remove={remove} />
            ))}
        </div>
    );
};

export default PostList;