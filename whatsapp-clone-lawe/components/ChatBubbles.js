import { useContext, useState, useEffect } from "react"
import BottomRight from "./BottomRight"
import ChatBubble from "./ChatBubble"
import { ChatContext, MessagesContext, RoomContext, SpecificContext } from "./context/ChatContext"

const ChatBubbles = () => {
    const [chatsList, setChatsList] = useContext(ChatContext)
    const [bubbleMessage, setBubbleMessage] = useState([]);
    const [selectedRoom, setSelectedRoom] = useContext(RoomContext);
    const [filteredMessages, setFilteredMessages] = useState([])
    const [name, setName] = useState("");
    const [messages, setMessages] = useContext(MessagesContext);
    const [uniqueItems, setUniqueItems] = useState([]);
    const [room, setRoom] = useContext(SpecificContext);
    // const messages = []

    const useUnique = () => {
        const uniqueSet = new Set(messages);
    
        const backToArray = [...uniqueSet]
        setUniqueItems(backToArray)
    
        console.log('uniqueSet', backToArray)
    }
    

    const filterMessages = (indmessage) => {
        // if(selectedRoom.room === indmessage.room){
        //     setBubbleMessage(indmessage)
        // }

        if(room === indmessage.room){
            const filtered = []
            for (let i=0; room === indmessage.room; i++){
                filtered.push(indmessage)
            }
            console.log("filtered", filtered)
        }
    }
    // const getMessages = () => {
    //     chatsList.map((message) => {
    //         messages.push(message.messages)
    //         console.log('messages',messages)

    //         // setName(message.user)
    //         // console.log('message',name)
    //     })

    
    // }

    // const getIndMessages = () => {
    //     messages.map((message) => {
            
    //     })
    // }
    const addresses = messages; // Some array I got from async call

    const uniqueAddresses = Array.from(new Set(addresses.map(a => a.room)))
 .map(room => {
   return addresses.find(a => a.room === room)
 })

 console.log('hope it works',uniqueAddresses)
    useEffect(() => {

        // filterMessages()
        console.log('messages_', selectedRoom)
        console.log('room', room)

    },[])

    return(
        <div className=" max-h-[78vh] overflow-y-scroll flex-col">
            {/* Map through list of chats and return chat bubbles */}
            <div className="flex-col space-y-6 mt-8 ml-[80px]">
          
            
                {/* // First map over your Products
                // note the ? is there to prevent it from crashing if Products is not defined */}
                    <>
                        {/* <p>{message.name}</p> */}
 
                        {/* //then map over this products sizes */}
                        <div className="flex-col space-y-4">

                             
                                 {
                                     
                                    uniqueAddresses.map(indmessage => 
                                            <ChatBubble onClick={filterMessages(indmessage)} message={indmessage.room} time={indmessage.timestamp} name={indmessage.user} receiving={indmessage.receiving}/>

                                        )

                                        }
                                        
                                    )
                                
                                
                        </div>
                    </>
            
                {/* <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ" image="https://cdn.discordapp.com/attachments/817048198022430761/948614031508377610/pexels-enes-ersahin-10665348.jpg"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ " image="https://cdn.discordapp.com/attachments/817048198022430761/948579130344079360/pexels-rakicevic-nenad-1262304.jpg"/>
                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ" receiving={true}/>
                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ" receiving={true}/> */}


            </div>

        </div>
    )
}

export default ChatBubbles