import React, {useState} from "react"
import "./style.css"

const Users = ()=>{
    const users = ["Вася", "Сеня", "Куаныш - долбоеб"]
    return <div className = "Users">
        <h1>
            Friends Chat
        </h1>
        <div className = "userList">
            {users.map((item, index)=>{
                return <div className = "userItem" key = {index}>
                    {item}
            </div>
        })}
        </div>

    </div>
}

export default Users