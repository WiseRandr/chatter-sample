import React from "react";
import { Link } from "react-router-dom";
import Chatter from "../Chatter/Chatter";

const ChatUser = new Chatter();

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Chatter</span>
                        <p>Run a real-time chat web application for your team with a local private network.</p>
                    </div>
                    <div className="card-action">
                        <button className="btn">
                            {
                                ChatUser.isLogged() ?
                                <Link to="/logout">Logout</Link>
                                :
                                <Link to="/login">Login</Link>
                            }
                        </button>
                    </div>
                </div>
                </div>
          </div>
        </div>
    );
}

export default Home;