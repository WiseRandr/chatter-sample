import React, { Component } from "react";
import socket from "../socket/socket";

import Chatter from "../Chatter/Chatter";

const { id, username, name } = new Chatter().get();

class Chat extends Component {
    state = {
        messages: <li>Loading messages ...</li>
    };

    sendMessage = (e) => {
        e.preventDefault();
    
        var target = e.target;
        var message = target.message.value;
    
        if(message !== "") {
            socket.emit('sendMessage', {content: message, id: id, username: username, name: name});
            target.message.value = "";
        }
    };

    getSide = (message) => message.username === username ? "owner" : "other";

    renderMessage = (message) => `<li class="message-content white-text ` + this.getSide(message) + `" key=` + message.time + `>
            <span>` + message.name + `</span><br/>
            <span>` + message.content + `</span>
        </li>`;

    typing = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            document.querySelector('button[type="submit"]').click();
        }
        
        socket.emit('typing', name);
    }

    render() {
        if(!new Chatter().isLogged())
            this.props.history.push('/login');
        else
            socket.emit('preparingChat');


        socket.on('finished', ({messages}) => {
            var msg = "";

            messages.forEach((message) => {
                msg += this.renderMessage(message)
            });

            document.querySelector('#messageWrapper').innerHTML = msg;
        });

        socket.on('receiveMessage', (message) => {
            document.querySelector('.feedback').innerHTML = "";
            var element = document.querySelector('#messageWrapper')
            var msg = element.innerHTML;
            document.querySelector('#messageWrapper').scrollTop = element.scrollHeight + 100;
            console.log(element.scrollTop, element.scrollHeight);
            element.innerHTML = msg + this.renderMessage(message);
        });

        socket.on('receiveTyping', name => {
            var feedback = document.querySelector('.feedback').innerHTML;
            if(document.querySelector('#' + name) === null)
                document.querySelector('.feedback').innerHTML = feedback + `<p id="` + name + `">` + name + ` is typing ...</p>`
        });

        return(
            <div className="container">
                <div className="row">
                    <form className="col s12" id="writeMessage" onSubmit={this.sendMessage}>
                    <div className="row">
                        <div className="col s10">
                            <ul id="messageWrapper">
                                { this.state.messages }
                            </ul>
                            <div className="feedback"></div>
                        </div>
                        <div className="input-field col s10">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="textarea1" className="materialize-textarea" name="message" onKeyPress={this.typing}></textarea>
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
}

export default Chat;