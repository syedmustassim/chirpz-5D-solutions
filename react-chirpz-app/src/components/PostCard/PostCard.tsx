import {RiVerifiedBadgeFill} from "react-icons/ri"
import "./PostCard.css"

export interface Post {
    [key: string]:any
}

const PostCard = ({post}: Post) => {

    return(
        <div className="post-card">
            <span className="post-head">
                <h2>{post?.userName}</h2>
                {post?.isVerified ? <RiVerifiedBadgeFill color="#E88607" size={20}/> : ""}
            </span>
                <p className="post-caption">{post?.caption}</p>
            <div className="tags-container">
                {
                    post?.tags?.map((tag: string) => <p className="post-tags" key={tag}>{tag}</p>)
                }
            </div>
        </div>
    )
}

export default PostCard