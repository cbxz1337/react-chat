import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import LoginBar from './components/loginBar/index'
import Users from './components/Users';
import {Fragment} from "react"
import { socket } from './utils/socket';

function App() {
  const [hasUser, setHasUser] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('name')){
      setHasUser(true)
      socket.emit('new_user_connected', localStorage.getItem('name'))
      }
    else return
  },[])
  return (
    <div className="App">
      {hasUser?
      <Fragment>
          <Users/>
          <Chat/>
        </Fragment>
        :
        <LoginBar hasUser = {setHasUser}/> }
    </div>
  );
}

export default App;
