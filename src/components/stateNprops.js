import React from "react";
import { useState } from "react";

const stateNprops = (props) => {
    const [user, setUser] = useState({ firstName: "Shyam Singh", lastName: "Sherawat" } );

    const changeUserName = () => {
        const userName = {...user}
            userName.firstName = "Laxman Prasad"
            setUser(userName)
    }
    return(
        <>
            <h1>{props.name}</h1>
            <div>
                <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <div>
                <button onClick={changeUserName} style={{cursor : "pointer"}}>Click Here</button>
            </div>
        </>
    )
}

export default stateNprops;