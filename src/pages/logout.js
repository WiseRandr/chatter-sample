import React from "react";
import Chatter from "../Chatter/Chatter";

const ChatUser = new Chatter();

const Logout = (props) => {
    ChatUser.set({});
    
    props.history.push('/');
    
    return(
        <div>
            Logout Process ...
        </div>
    );
};

export default Logout;