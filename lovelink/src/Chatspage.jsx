import React from 'react'
import Header from './Header'
import Chat from "./Chat"

function Chatpage() {
  return (
    <div>
      <Header/>
    
       <Chat
        name= "Qazi"
        message= "Can I help you?"
        time = "3 mins ago"
        profile = "https://yt4.ggpht.com/ytc/AIdro_nbK_D94OcXEb4TJMW2JzTTtdB6DjfZPQpaSlcLfQ=s32-c-k-c0x00ffffff-no-rj"
      />
      <Chat
        name= "Simran Pokhrel"
        message= "How are you?"
        time = "5 mins ago"
        profile = "https://scontent.fbdp1-1.fna.fbcdn.net/v/t39.30808-6/416043114_1028555141589969_4183173660042975788_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4fyAPktFpgYAX9i_KSO&_nc_ht=scontent.fbdp1-1.fna&oh=00_AfBLlJoDqKz459kPvNHMr7rjammGQUgkyqgoLwqdFyFGqA&oe=660061A7"
      />
      <Chat
        name= "Steve Jobs"
        message= "You are the actual CEO"
        time = "5 mins ago"
        profile = "https://hips.hearstapps.com/hmg-prod/images/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg?crop=0.757xw:0.534xh;0.0799xw,0.0372xh&resize=1200:*"
      />
      <Chat
        name= "Aadam"
        message= "Let's go out.."
        time = "5 mins ago"
        profile = "https://yt4.ggpht.com/ytc/AIdro_nwJwKGZRH5IIrLzfpOePJGon0RMMUXUFKBb3Al_g=s32-c-k-c0x00ffffff-no-rj"
      />
      <Chat
        name= "Frank"
        message= "Done with your project?"
        time = "5 mins ago"
        profile = "https://yt4.ggpht.com/ytc/AIdro_namWrYML5EElPYZLCzRK0ZbBS_mNM-VxCCu2kzoQ=s32-c-k-c0x00ffffff-no-rj"
      />
    </div>
  )
}

export default Chatpage
