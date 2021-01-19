import React, {useEffect, useState} from "react"
import { socket } from "../../utils/socket"
import "./style.css"

const Users = ()=>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        socket.on('online_users', (data)=>{
            setUsers(data)
            console.log(data)
         })}, [])
    return <div className = "Users">
        <h1>
            Friends Chat
        </h1>
        <div className = "userList">
            {users.map((item, index)=>{
                return <div className = "userItem" key = {index}>
                    {item.name}
            </div>
        })}
        </div>

    </div>
}

export default Users