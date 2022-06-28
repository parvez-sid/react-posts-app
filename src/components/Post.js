import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);

    const urlParams = useParams()

    const getPostDetails = async() => {
        setLoading(true)
        const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${urlParams.postId}`);
        setLoading(false)
        setPost(postData.data);
    }
    useEffect(() => {
        getPostDetails()
    }, [urlParams.postId])

    return(
        <>
        {
            loading ? "fetching post ......" :
            <>
                {
                    !post ? " No post found" : <> 
                        <h1>Post: {post.id}</h1>
                        <p> Title : {post.title}</p>
                        <p> Text : {post.body}</p>
                </>
                }
            </>
        }
        </>
    )
}

export default Post