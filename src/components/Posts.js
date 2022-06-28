import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    const getPosts = async () => {
        setLoading(true)
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setLoading(false)
        setPosts(posts.data);
    }

    useEffect(() => {
        getPosts();
    },[])

    return(
        <>
            {loading ? <>loading....</> :
                    posts.map((post) => {
                        return <li key={post.id}
                            style={{cursor : "pointer"}}
                            onClick={(e) => {{
                                e.preventDefault();
                                navigate(`/post/${post.id}`)}}
                            }
                        >
                            {post.title}
                        </li>
                    })
            }
        </>
    )
}

export default Posts