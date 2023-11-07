import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch } from "../../store";
import { useEffect } from "react";

import { getPosts } from "../../features/postSlice";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css"
import PostCard from "../../components/PostCard/PostCard";

interface Post {
    apiId: string,
    caption: string,
    [key: string]:any
}

interface RootState {
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

    useEffect(() => {
        if(status === "idle"){
            dispatch(getPosts())
        }
    },[status,dispatch])

    return(
        <div>
            <div className="home-header">
            <Sidebar/>
            <div className="home-header-main">
                <div className="home-content">
                    <h1>Home</h1>
                    <button className="create-btn">Create</button>
                </div>
                <div>
                {posts?.map((post) => <PostCard post={post}/>)}
            </div>
            </div>
            <ProfileInfo/>
            </div>

        </div>
    )
}

export default Home;