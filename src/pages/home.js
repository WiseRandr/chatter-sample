import React from "react";
import { Link } from "react-router-dom";

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
                        <Link to="/login">Login</Link>
                    </div>
                </div>
                </div>
          </div>
        </div>
    );
}

export default Home;