import React, { useState } from 'react'
import { socket } from '../../utils/socket'
import "./style.css"

const LoginBar = (props)=>{
    let [userName, setUserName] = useState("")

    function handleChange(event){
        setUserName(event.target.value)
    }
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleClick()
        }
    }
    function handleClick(){
        if(!userName){
            alert("Вы не ввели имя.")
            return
        }
        props.hasUser(true)  
        socket.once("check_username", (result)=>{
            console.log(result)
            if(result){
                alert("Имя занято, введите другое имя.")
                props.hasUser(false)  
                localStorage.setItem("name","")
                return
            }
        })
        console.log(userName)

        localStorage.setItem("name", userName)
        socket.emit('new_user_connected', userName)
    }
    return <div className="LoginBar">
        <h1>
            Friends Chat
        </h1>
        <div className = "loginGroup">
            <input placeholder = "Ваше имя" 
                onChange ={handleChange}
                onKeyDown = {handleKeyDown}
                value = {userName} 
            />
            <button onClick = {handleClick}>
                Войти
             </button>  
        </div>
    </div>

}


export default LoginBar