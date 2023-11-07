import {FiMenu} from "react-icons/fi"
import "./ProfileInfo.css"
const ProfileInfo = () => {
    return(
        <div className="profile-info">
            <article className="profile">
                <img src="https://i.postimg.cc/xTb5RjXK/Profile-Picture.png" alt="profile"/>
                <h2>John Doe</h2>
            </article>
            <FiMenu size={30}/>
        </div>
    )
}

export default ProfileInfo;