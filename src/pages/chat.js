import React from "react";

const Chat = () => {
    return(
        <div className="container">
            <div className="row">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">mode_edit</i>
                        <textarea id="textarea1" className="materialize-textarea" name="message"></textarea>
                        <label htmlFor="textarea1">Write your message ...</label>
                    </div>
                    <div className="input-field col s2">
                        <button className="btn" type="submit">
                            <i className="material-icons">send</i>
                        </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Chat;