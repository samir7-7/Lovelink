import { useState } from 'react'
import "./Chatscreen.css"
import { Avatar } from '@mui/material'

function Chatscreen() {
  const [input,setInput]= useState('')
  const [messages,setMessages] = useState([
    {
        name:"Qazi",
        message: "Can I help you?",
        image: "https://yt4.ggpht.com/ytc/AIdro_nbK_D94OcXEb4TJMW2JzTTtdB6DjfZPQpaSlcLfQ=s32-c-k-c0x00ffffff-no-rj",
    },
    {
        message: "Yah! I am having some problems with my mainpage",
    },
  ]);

  const handleSend = (e)=>{
    e.preventDefault();
    setMessages([...messages,{message: input}]);
    setInput('');
  };

  return (
    <div className='chatScreen'>
     <p className='matched_Date'>You matched with Qazi on 10th of January</p>
      {messages.map(message=>(
        message.name?(
            <div className='chatscreen_Message'>
            <Avatar 
            className="chatscreen_Image"
            alt={message.name}
            src={message.image}/>
            <p className='chatscreen_Text'>{message.message}</p>
        </div>
        ):(
            <div className="chatscreen_Message">
                <p className='chatscreen_Usertext'>{message.message}</p>
            </div>
        )

       
        
      ))}
      
        <form className='input_Form'>
        <input value={input} onChange={e=>setInput(e.target.value)}className='input_Text' type='text'placeholder='Type your message...'/>
        <button onClick={handleSend} type="submit" className='input_Send'>Send</button>
        </form>
        
    </div>
  )
}

export default Chatscreen
