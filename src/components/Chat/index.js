import React,{useEffect, useState, useRef} from "react"
import { socket } from "../../utils/socket"
import "./style.css"
import ScrollToBottom from 'react-scroll-to-bottom';


const Chat = ()=>{


    const [msg, setMsg] = useState("")
    const [chatdata, setChatData] = useState([])
    const isMyself = localStorage.getItem("name")

    useEffect(()=>{
        socket.once('allData', (data)=>{
            setChatData(data)
        })
        socket.on('data_chat_back_one', (data)=>{
            setChatData(oldMessages => ([...oldMessages,data]))
        } )
        socket.on('chat_new_user_msg', (data)=>{
            console.log(data)
            setChatData(oldMessages => ([...oldMessages,{message:"Пользователь "+data+" присоединился к чату."}]))
        } )
        socket.on('chat_disconnect_user_msg', (data)=>{
            console.log(data)
            setChatData(oldMessages => ([...oldMessages,{message:"Пользователь "+data+" вышел из чата."}]))
        } )
        
     }, [])

    function handleChange(event){
        setMsg(event.target.value)
    }
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleClick()
        }
    }
    const handleClick = ()=>{
            if(msg){
            let date = Date.now()
            socket.emit("msg_from_front", {
                name: isMyself,
                message: msg,
                date: date
            })
            setMsg("")
        }
    }
    return <div className = "Chat">
        <ScrollToBottom debug = {false} className = "chatWindow">
            {chatdata.map(({name="", message, date=""}, index)=>{
                const timeStamp = new Date(date)
                const finalDate = timeStamp.getMinutes()>=10?(String(timeStamp.getHours())+":"+String(timeStamp.getMinutes())):(String(timeStamp.getHours())+":0"+String(timeStamp.getMinutes()))
                return <div className ={(name===isMyself)? "chatItem myMsg":"chatItem"} key = {index}>
                    <div className = "dateName">
                        <span>{(name===isMyself)?"Вы":name}</span>
                        <p>{date==""?"":finalDate}</p>
                    </div>
                    <p className = 'message'>{message}</p>
                </div>
            })}
        </ScrollToBottom>
        <div className = "msgBar">
            <input className = "msgInput" placeholder = "Ваше сообщение ..." value = {msg} onChange = {handleChange} onKeyDown = {handleKeyDown} />
            <svg className = "msgButton" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg" onClick = {handleClick} >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9236 60.1274C47.4922 60.1274 60.9236 46.696 60.9236 30.1274C60.9236 13.5589 47.4922 0.127441 30.9236 0.127441C14.3551 0.127441 0.923645 13.5589 0.923645 30.1274C0.923645 46.696 14.3551 60.1274 30.9236 60.1274Z" fill="#DBE6FA"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9236 22.1274L27.9236 33.1274L38.9236 22.1274Z" fill="black" fill-opacity="0.01"/>
                <path d="M38.9236 22.1274L27.9236 33.1274" stroke="#343C4B"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9236 22.1274L31.9236 41.1274L27.9236 33.1274L19.9236 29.1274L38.9236 22.1274Z" fill="black" fill-opacity="0.01"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9236 22.1274L31.9236 41.1274L27.9236 33.1274L19.9236 29.1274L38.9236 22.1274Z" stroke="#343C4B" stroke-linecap="square"/>
            </svg>
        </div>
    </div>
}

export default Chat