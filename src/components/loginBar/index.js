import React, { useState } from 'react'
import { socket } from '../../utils/socket'
import "./style.css"

const LoginBar = (props)=>{
    let [userName, setUserName] = useState("")

    function handleChange(event){
        setUserName(event.target.value)
    }
    function handeClick(){
        console.log(userName)
        if(!userName){
            alert("Вы не ввели имя.")
            return
        }
        localStorage.setItem("name", userName)
        socket.emit('new_user_connected', userName)
        props.hasUser(true)   
    }
    return <div className="LoginBar">
        <h1>
            Friends Chat
        </h1>
        <div className = "loginGroup">
            <input placeholder = "Ваше имя" 
                onChange ={handleChange}
                value = {userName} 
            />
            <button onClick = {handeClick}>
                Войти
             </button>  
        </div>
    </div>

}


export default LoginBar