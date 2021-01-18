import React, {useState} from "react"
import "./style.css"

const Sidebar = ()=>{
    const handleClick = ()=>{
        alert("Привет")
        setLabel(label)
    }
    const quitChat = ()=>{
        alert("smth")
    }
    var [label, setLabel] = useState(0)
    return <div className="test" >
        <input/>
        <button onClick = {handleClick}>
            Send message
        </button>
        <button onClick = {quitChat}>
            Quit
        </button>
        {label}
        </div>
}
// class MyLabel extends label{
//     constructor(state){
//         super()
//         this.state = state
//         this.setLabel(state)
//     }
// }
export default Sidebar