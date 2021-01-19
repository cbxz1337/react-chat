import React,{useEffect, useState} from "react"
import { socket } from "../../utils/socket"
import "./style.css"


const Chat = ()=>{

    const [msg, setMsg] = useState("")
    const [chatdata, setChatData] = useState([])

    useEffect(()=>{
        socket.on('data_chat_back_one', (data)=>{
            setChatData(data)
        } ) }, [])

    function handleChange(event){
        setMsg(event.target.value)
    }
    const handleClick = ()=>{
       socket.emit("msg_from_front", {
           name: isMyself,
           message: msg
       })
       setMsg("")
       console.log(msg);
    }
    const isMyself = localStorage.getItem("name")


    
    return <div className = "Chat">
        <div className = "chatWindow">
            {chatdata.map(({name, message}, index)=>{
                return <div className ={(name===isMyself)? "chatItem myMsg":"chatItem"} key = {index}>
                    <span>{(name===isMyself)?"Вы":name}</span>
                    <p>{message}</p>
                </div>
            })}
        </div>
        <div className = "msgBar">
            <input className = "msgInput" placeholder = "Ваше сообщение ..." value = {msg} onChange = {handleChange}/>
            <img src="https://via.placeholder.com/60" className = "msgButton" onClick = {handleClick}>

            </img>
        </div>
    </div>
}

export default Chat