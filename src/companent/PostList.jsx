import React from 'react';
import PostItem from "./PostItem.jsx";

const PostList = ({ posts, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Посты</h1>
            {posts.map((post, index) => (
                <PostItem key={post.id} post={post} number={index + 1} remove={remove} />
            ))}
        </div>
    );
};

export default PostList;