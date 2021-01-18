import React, { useState } from 'react'
import "./style.css"

const LoginBar = ()=>{
    let [userName, setUserName] = useState("")

    function handleChange(event){
        setUserName(event.target.value)
    }
    function handeClick(){
        console.log(userName);
        localStorage.setItem("name", userName)
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