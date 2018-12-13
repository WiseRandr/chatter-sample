import React from "react";
import Chatter from "../Chatter/Chatter";
import socket from "../socket/socket";

const ChatUser = new Chatter();
const {id, name, username, email} = ChatUser.get();

let historyVal = {};

const updateForm = (e) => {
    e.preventDefault();

    var target = e.target;
    var inname = target.name.value,
    inemail = target.email.value;

    socket.emit('updateUser', {id: id, name: inname, username: username, email: inemail});
    socket.on('updatedUser', (user) => {
        ChatUser.set(user);
        historyVal.push('/profile');
    });
};

const Profile = ({history}) => {
    if(!ChatUser.isLogged())
        history.push('/login');
        
    historyVal = history;

    return(
        <div className="container">
            <div className="row">
                <form onSubmit={updateForm}>
                    <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{ name }</span>
                            <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="first_name" type="text" name="name" className="validate" placeholder={name}/>
                                <label htmlFor="first_name">Name</label>
                            </div>
                                <div className="input-field col s6">
                                <input id="last_name" type="text" name="username" className="validate" placeholder={username} disabled/>
                                <label htmlFor="last_name">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">mail</i>
                                <input id="email" type="email" name="email" className="validate" placeholder={email}/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        </div>
                        <div className="card-action">
                            <button type="submit" className="btn">
                                Update
                            </button>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;