import React, {useState} from 'react';
import MyInput from "./UI/MyInput/MyInput.jsx";
import MyButton from "./UI/MyButton/MyButton.jsx";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({title: '', body: ''})

    const AddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    type='text'
                    placeholder='Названия поста'
                    onChange={e => setPost({...post, title:e.target.value})}
                />
                <MyInput
                    value={post.body}
                    type='text'
                    placeholder='Описание поста'
                    onChange={e => setPost({...post, body:e.target.value})}
                />
                <MyButton onClick={AddNewPost}>Добавить</MyButton>
            </form>
        </div>
    );
};

export default PostForm;