import React from "react";
import socket from "../socket/socket";

const registerForm = (e) => {
    e.preventDefault();

    var target = e.target,
    name = target.name.value,
    username = target.username.value,
    email = target.email.value,
    password = target.password.value;

    var user = {
        name: name,
        username: username,
        email: email,
        password: password
    };

    socket.emit('register', user);
    socket.on('registered', (user) => {
        console.log(user);
    });
};

const Register = () => {
    return(
        <div className="container">
            <div className="row card">
                <form className="card-content col s12" onSubmit={registerForm}>
                    <div className="card-title">
                        <p>Register new account</p>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="first_name" type="text" name="name" className="validate" required/>
                        <label htmlFor="first_name">Name</label>
                        </div>
                        <div className="input-field col s6">
                        <input id="last_name" type="text" name="username" className="validate" required/>
                        <label htmlFor="last_name">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" name="password" className="validate" required/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">mail</i>
                        <input id="email" type="email" name="email" className="validate" required/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <input type="submit" className="btn right" value="Register"                                     />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;