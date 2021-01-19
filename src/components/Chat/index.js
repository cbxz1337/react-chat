import React,{useEffect, useState, useRef} from "react"
import { socket } from "../../utils/socket"
import "./style.css"
import ScrollToBottom from 'react-scroll-to-bottom';


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
    function handleKeyDown(event){
        if(event.key == 'Enter'){
            handleClick()
        }
    }
    const handleClick = ()=>{
            if(msg){
            socket.emit("msg_from_front", {
                name: isMyself,
                message: msg
            })
            setMsg("")
            console.log(msg);
        }
    }
    const isMyself = localStorage.getItem("name")


    
    return <div className = "Chat">
        <ScrollToBottom debug = {false} className = "chatWindow">
            {chatdata.map(({name, message}, index)=>{
                return <div className ={(name===isMyself)? "chatItem myMsg":"chatItem"} key = {index}>
                    <span>{(name===isMyself)?"Вы":name}</span>
                    <p>{message}</p>
                </div>
            })}
        </ScrollToBottom>
        <div className = "msgBar">
            <input className = "msgInput" placeholder = "Ваше сообщение ..." value = {msg} onChange = {handleChange} onKeyDown = {handleKeyDown} />
            <img src="https://via.placeholder.com/60" className = "msgButton" onClick = {handleClick}>

            </img>
        </div>
    </div>
}

export default Chat