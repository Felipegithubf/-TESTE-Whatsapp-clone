import React from "react";
import './ChatListtem.css';

const ChatListItem = () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg" alt="Avatar"/>
            <div className="chatListItem--content">
                <div className="chatListItem--lines">
                    <div className="chatListItem--name">Lipe Carvalho</div>
                    <div className="chatListItem--date">12:17</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--LastMsg">
                        <p>Então mano, você vai poder me responder daqui a pouco?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatListItem;