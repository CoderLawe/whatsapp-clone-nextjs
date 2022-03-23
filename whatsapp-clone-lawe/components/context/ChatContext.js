import { useEffect, useState } from "react";
import { createContext } from "react";
import {v4 as uuid} from "uuid";
import api from "../../pages/api/messages"
export const ChatContext = createContext()
export const RoomContext = createContext();
export const MessagesContext = createContext();
export const SpecificContext = createContext();
// const [items, setItems] = useState([])
// const items = [
//     {id:uuid(), name:"Jeff's room", image:"https://cdn.discordapp.com/attachments/817048198022430761/948614031508377610/pexels-enes-ersahin-10665348.jpg", messages:[
//         {message:"Hi there my frends call me Jeff....friends...that I have", timestamp:'just now',id:uuid(),user:"tyrone",room:"Jeff's room",receiving:true },
//         {message:"wutup", timestamp:'just now', id:uuid(),user:"Josh", room:"Jeff's room" }
//     ]},
//     {id:uuid(), name:"Larouche Group", image :"https://cdn.discordapp.com/attachments/817048198022430761/948579130344079360/pexels-rakicevic-nenad-1262304.jpg", messages:[
//         {message:"Hi there my frends call me Jeff....friends...that I have", timestamp:'just now',id:uuid(),user:"tyrell", room:"Jeff's room"},
//         {message:"Hi there my frends call me Jeff....friends...that Ih have", timestamp:'just now', id:uuid(), user:"phil", room:""}
//     ]},
//     {id:uuid(), name:"Leonardo de capriovinci III and friends", image:"https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png", messages:[
//         {message:"Hi there my frends call me Jeff....friends...that I have", timestamp:'just now',id:uuid(), user:"jake", room:"Larouche Group"},
//         {message:"Hi there my frends call me Jeff....friends...that Ih have", timestamp:'just now', id:uuid(), user:"random"}
//     ]},
//     {id:uuid(), name:"Leonardo de capriovinci III", image:"https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png", messages:[
//         {message:"Hi there my frends call me Jeff....friends...that I have", timestamp:'just now',id:uuid(), user:"testrico garcia"},
//         {message:"Hi there my frends call me Jeff....friends...that Ih have", timestamp:'just now', id:uuid(),  user:"phil garcia"}
//     ]},
    
// ]
// const items = []



export const ChatProvider = ({children}) => {

    const [chatsList, setChatsList] = useState([])
    const [messages, setMessages] = useState([])
    const [selectedRoom, setSelectedRoom] = useState({name:"Select room", message:"select a chat room from the left", room:"Jeff's room"});

    const [room, setRoom] = useState("");

    const retrieveMessages = async() => {
        const response =  await api.get("/messages")
        console.log("messages", response.data)
        return response.data
    }

    const retrieveItems = async () => {
    const response = await api.get("/chatroom")
    console.log('data',response.data)
    return response.data
}


// For messages delete for chats later

useEffect(() => {
    const getAllItems = async () => {
        const allItems = await retrieveMessages()

        if(allItems){
            // items.push(allItems)
            setMessages(allItems);
            console.log('Success messages',allItems)

        }
        
    }
    console.log('messages', messages[1])
    getAllItems()
},[selectedRoom])
// useEffect(() => {
//     const getAllItems = async () => {
//         const allItems = await retrieveItems()

//         if(allItems){
//             // items.push(allItems)
//             setChatsList(allItems);
//             console.log('Success',allItems)

//         }
//     }

//     getAllItems()
// },[chatsList])

 

    return(
        <ChatContext.Provider value={[chatsList, setChatsList]}>
            <RoomContext.Provider value={[selectedRoom, setSelectedRoom]}>
                <MessagesContext.Provider value={[messages, setMessages]}>
                    <SpecificContext.Provider value={[room, setRoom]}>
                        {children}
                    </SpecificContext.Provider>
                </MessagesContext.Provider>
            </RoomContext.Provider>
        </ChatContext.Provider>
    )
}
