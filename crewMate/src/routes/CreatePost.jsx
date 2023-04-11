import { useState } from "react";
import supabase from "../App";

const CreatePost = ({supabase})=> {

    const [post, setPost] = useState({username: ""})

    
    const handleChange = (event) => {
        let value = event.target.value;
        console.log(value)
        setPost({username: value})
    }
    
    const create_CrewMate = async () => {

        const {data,  error} = await supabase.from("crew mates").insert([{username: post.username}])
    }


        return (
            <div className="Create"> 
            <form>
                <label> Username </label>
                <input type="text" name="title" value={post.username} onChange={handleChange} />
                <input type="submit" value="submit" onClick={create_CrewMate}></input>
            </form>
            </div>
        );
 }



export default CreatePost;