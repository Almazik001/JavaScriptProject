import {useEffect, useState} from 'react'
import './App.css'
import PostList from "./companent/PostList.jsx";
import PostForm from "./companent/PostForm.jsx";
import MyModal from "./companent/UI/MyModal/MyModal.jsx";
import MyButton from "./companent/UI/MyButton/MyButton.jsx";
import PostService from "./companent/API/PostService.js";
import {useFetching} from "./hooks/useFetching.js";
import Loading from "./companent/UI/MyLoading/Loading.jsx";

import {getPagesCount} from "./utils/pages.jsx";
import Pagination from "./companent/UI/Pagination.jsx";

function App() {

    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPost, postLoading, postError] = useFetching( async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPost(limit, page)
    }, [page]);


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)])
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className='App'>
            <MyButton onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }

            {postLoading
                ?
                <div style={{display: "flex", justifyContent: "center", marginTop: 200}} > <Loading/> </div>
                :
                <PostList posts={posts} remove={removePost} title='JavaScript'/>
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    )
    }

export default App
