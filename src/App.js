import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import LoginBar from './components/loginBar/index'
import Users from './components/Users';
import {Fragment} from "react"
import { socket } from './utils/socket';

function App() {
  useEffect(()=>{
    if(localStorage.getItem('name')){
      socket.emit('new_user_connected', localStorage.getItem('name'))
      }
    else return
  },[])
  const [hasUser, setHasUser] = useState(false)
  return (
    <div className="App">
      {localStorage.getItem("name")?
      <Fragment>
          <Users/>
          <Chat/>
        </Fragment>:
        <LoginBar hasUser = {setHasUser}/> }
    </div>
  );
}

export default App;
