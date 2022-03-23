import Chat from "./Chat";
import { useState } from "react";
import { v4 as uuid} from 'uuid'
import { ChatContext, MessagesContext, RoomContext } from "./context/ChatContext";
import { useContext } from "react";
import { useEffect } from "react";
const Chats = () => {
   
    const [chatsList, setChatsList] = useContext(ChatContext)
    const [selectedRoom, setSelectedRoom] = useContext(RoomContext);
    const [chatName, seChatName] = useState("")
    const [messages, setMessages] = useContext(MessagesContext);
    const setName = () => {
        const newName = (chatsList.name)
        console.log(newName)
    }

    const addresses = messages; // Some array I got from async call

    const uniqueAddresses = Array.from(new Set(addresses.map(a => a.room)))
 .map(room => {
   return addresses.find(a => a.room === room)
 })
 
    return(
        <div className="h-[75vh] max-h-[75vh] overflow-y-scroll bg-white">
           {uniqueAddresses.map((list) => (
               
            <Chat  key={list.id} name={list.room} chatRoom={list} image={list.image}/>
           ))}
           
           {/* <Chat image="https://cdn.discordapp.com/attachments/817048198022430761/948614031508377610/pexels-enes-ersahin-10665348.jpg" name="Jeffery Bezos" clicked={true}/>
            <Chat image="https://cdn.discordapp.com/attachments/817048198022430761/948579130344079360/pexels-rakicevic-nenad-1262304.jpg" name="Larouche De Sosah" clicked={false}/>
            <Chat image="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" name="Leonardo de capriovinci III" clicked={false}/>
            <Chat image="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" name="Leonardo de capriovinci III" clicked={false}/>

            */}

            


        </div>
    )
}
export default Chats