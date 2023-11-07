import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css"

const Home = () => {
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