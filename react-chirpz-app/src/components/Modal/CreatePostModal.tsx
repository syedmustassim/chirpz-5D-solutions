import {useState, ChangeEvent, FormEvent} from "react"
import { AppDispatch } from "../../store";
import {useDispatch} from "react-redux"
import {AiOutlineClose} from "react-icons/ai";

import { addPosts } from "../../features/postSlice";
import "./Modal.css"

type ModalProps = {
    closeModal: (value: boolean) => void
}

const CreatePostModal = ({closeModal}: ModalProps) => {

    const dispatch = useDispatch<AppDispatch>();
    const [newPost, setNewPost] = useState({
        caption: "",
        tags: [] as string[],
        userName: "Nick Halden",
        createdAt: new Date()
    })
    const [currentTag, setCurrentTag] = useState('')

    const modalHandler = () => {
        closeModal(false)
    }

    const formHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewPost({...newPost, [name]: value})
    }

    const addTag = () => {
        if(currentTag){
            setNewPost({...newPost, tags: [...newPost.tags, `#${currentTag}`]})
            setCurrentTag("")
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addPosts(newPost))
        closeModal(false);
    }
    
    return(
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-title">
                    <h1>Create <b style={{color: "#E88607"}}>Chirpz</b></h1>
                    <AiOutlineClose onClick={modalHandler} size={30} className="close-icon"/>
                </div>
                <form className="modal-content" onSubmit={handleSubmit}>
                <div className="content">
                    <h2>Create</h2>
                    <input type="text" name="caption" placeholder="What's on your mind?" value={newPost?.caption} onChange={formHandler}/>
                    <h2>Add Tags</h2>
                    <div className="tags-modal">
                        <input type="text" name="tags" placeholder="Write tags" value={currentTag} onChange={(e) => setCurrentTag(e.target.value)}/>
                        {currentTag ? <button onClick={addTag}>Add</button> : ""}
                    </div>
                    <div className="tag">
                        {newPost?.tags?.map((item,index) => <p className="tags-display" key={index}>{item}</p>)}
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-create-btn" type="submit">Create</button>
                    <button className="cancel-btn" onClick={modalHandler}>Cancel</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePostModal;