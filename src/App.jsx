import { useState } from 'react'
import './App.css'
import PostList from "./companent/PostList.jsx";
import PostForm from "./companent/PostForm.jsx";

function App() {

  const [posts, setPosts] = useState([])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
      setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
        {posts.length !== 0
            ?
            <PostList posts={posts} remove={removePost} title='JavaScript'/>
            :
            <h1 style={{textAlign: "center"}}>Списак постов нет</h1>
        }
    </div>
  )
}

export default App
