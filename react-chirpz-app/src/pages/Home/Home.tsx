import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";

import { getPosts } from "../../features/postSlice";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostCard from "../../components/PostCard/PostCard";
import CreatePostModal from "../../components/Modal/CreatePostModal";

import "./Home.css"

interface Post {
    apiId: string,
    caption: string,
    [key: string]:any
}

export interface RootState {
    posts: {
        posts: Post[],
        status: string,
        error: null | any;
    }
}



const Home = () => {
    const dispatch= useDispatch<AppDispatch>();
    const posts = useSelector((state: RootState) => state.posts.posts)
    const status = useSelector((state: RootState) => state.posts.status)
    const error = useSelector((state: RootState) => state.posts.error)

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        if(status === "idle"){
            dispatch(getPosts())
        }
    },[status,dispatch])

    const handleModal = () => {
        setOpenModal(prev => !prev)
    }

    console.log(posts)

    return(
        <div>
            <div className="home-header">
            <Sidebar/>
            <div className="home-header-main">
                <div className="home-content">
                    <h1>Home</h1>
                    <button className="create-btn" onClick={handleModal}>Create</button>
                </div>
                <div>
                {openModal && <CreatePostModal closeModal={setOpenModal}/>}
                {posts?.map((post) => <PostCard post={post} key={post.id}/>)}
                </div>
            </div>
            <ProfileInfo/>
            </div>

        </div>
    )
}

export default Home;