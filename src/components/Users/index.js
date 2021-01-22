import React, {useEffect, useState} from "react"
import { socket } from "../../utils/socket"
import "./style.css"

const Users = ()=>{
    function hadleClick(){
        setActiveUsers(!activeUsers)
    }
    const [activeUsers, setActiveUsers] = useState(false)
    const [users, setUsers] = useState([])
    useEffect(()=>{
        socket.on('online_users', (data)=>{
            setUsers(data)
            console.log(data)
         })}, [])
    return <div className = {activeUsers? "Users Active":"Users"}>
        <div className = "userTopBar">
            <h1>
                Friends Chat
            </h1>
            <svg className = "MenuButton" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick = {hadleClick}>
                <path d="M0.130859 8.21143L21.4327 8.21143" stroke="white" stroke-width="2"/>
                <path d="M0.130859 1.51294L21.4327 1.51294" stroke="white" stroke-width="2"/>
                <path d="M0.130859 14.9099L21.4327 14.9099" stroke="white" stroke-width="2"/>
            </svg>
        </div>
       
        <div className = {activeUsers? "userList Show":"userList"}>
            {users.map((item, index)=>{
                return <div className = "userItem" key = {index}>
                    {item.name}
            </div>
        })}
        </div>

    </div>
}

export default Users