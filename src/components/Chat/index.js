import React,{useState} from "react"
import "./style.css"


const Chat = ()=>{

    let [msg, setMsg] = useState("")

    function handleChange(event){
        setMsg(event.target.value)
    }
    const handleClick = ()=>{
        // if(msg){
        //     let msgOnServer = JSON.stringify(msg)+":"+localStorage.getItem("name")
        // }
    }
    return <div className = "Chat">
        <div className = "chatWindow">
            <div className = "chatItem">

            </div>
        </div>
        <div className = "msgBar">
            <input className = "msgInput" placeholder = "Ваше сообщение ..." value = {msg} onChange = {handleChange}/>
            <img src="https://via.placeholder.com/60" className = "msgButton" onClick = {handleClick}>

            </img>
        </div>
    </div>
}

export default Chat