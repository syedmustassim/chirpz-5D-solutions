import { useDispatch, useSelector } from "react-redux/es/exports";
import { AppDispatch } from "../../store";
import { useEffect } from "react";

import { getPosts } from "../../features/postSlice";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css"

interface RootState {
    posts: {
        posts: any[],
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

    console.log(posts, 'home')
    console.log(error)
    return(
        <div className="home-main">
            <Sidebar/>
            <div className="home-content">
                <h1>Home</h1>
                <button className="create-btn">Create</button>
            </div>
            <ProfileInfo/>
        </div>
    )
}

export default Home;