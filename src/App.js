import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatListItem from './components/ChatListItem';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ChatIntro from './components/Chatintro';
import ChatWindow from './components/ChatWindow';

export default () => {
  const [chatlist, setChatList] = useState([{}, {}, {}, {}, {} , {} , {} , {} , {} , {} , {} , {}]);
  const [activeChat , setActiveChat] = useState({});
  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className="header--avatar" src="ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg" alt="" />
          <div className='header--button'>
            <div className="header--btn">
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: '#919191' }} />
            </div>
          </div>
        </header>

        <div className='search'>
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: '#919191' }} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
          </div>
        </div>
        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem key={key} 
                    onClick={() => setActiveChat(chatlist) }

                    />

          ))}
        </div>
      </div>

      <div className="content-area">
     
        {activeChat.chatId !== undefined &&
           <ChatWindow />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
       
        
    

      </div>
    </div>
  );
};