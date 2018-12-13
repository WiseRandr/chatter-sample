import React from "react";
import socket from "../socket/socket";
import Chatter from "../Chatter/Chatter";

let propsVal = {};

const loginForm = (e) => {
    e.preventDefault();

    var target = e.target;
    var email = target.email.value,
    password = target.password.value;

    socket.emit('login', {email: email, password: password});
    socket.once('logged', (user) => {
        Chatter.set(user);
        propsVal.history.push('/chat');
    });
};

const Login = (props) => {
    propsVal = props;

    return(
        <div className="container">
            <div className="row card">
                <form className="card-content col s12" onSubmit={loginForm}>
                    <div className="card-title">
                        <p>Login to chatter</p>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">mail</i>
                        <input id="email" type="email" name="email" className="validate" required/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">lock</i>
                        <input id="password" type="password" name="password" className="validate" required/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <input type="submit" className="btn right" value="Login" required/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;