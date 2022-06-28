import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li><li>
                    <Link to="/list">List</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar