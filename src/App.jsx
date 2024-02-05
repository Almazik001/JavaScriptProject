import { useState } from 'react'
import './App.css'
import PostList from "./companent/PostList.jsx";
import PostForm from "./companent/PostForm.jsx";
import MyModal from "./companent/UI/MyModal/MyModal.jsx";
import MyButton from "./companent/UI/MyButton/MyButton.jsx";

function App() {

  const [posts, setPosts] = useState([])
  const [modal, setModal] = useState(false)


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
      setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className='App'>
        <MyButton onClick={() => setModal(true)}>
            Создать пользователя
        </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
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
