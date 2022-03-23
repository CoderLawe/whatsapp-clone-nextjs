import Image from "next/image";
import { useContext, useEffect } from "react";
import { RoomContext, SpecificContext } from "./context/ChatContext";


const Chat = ({ image, name, clicked, chatRoom }) => {

    const [selectedRoom, setSelectedRoom] = useContext(RoomContext);
    const [room, setRoom] = useContext(SpecificContext);

    useEffect(() => {
            setRoom(selectedRoom.room)

       
        console.log('room', room)
    },[selectedRoom])
    
    return(
        <div onClick={() => setSelectedRoom(chatRoom)} className={clicked ? "flex justify-between   items-center py-3 px-3 bg-gray-200 cursor-pointer":"flex justify-between   items-center py-3 px-3 bg-gray-100 cursor-pointer"}>
            {/* Image */}

            <img className="rounded-full h-[50px] w-[50px]" src={image} height={70} width={70}/>

            {/* Name */}
            <div className="flex-col space-y-2 flex-1 ml-10">
                <h5 className="text-gray-700 text-lg">{name}</h5>
                <p className="text-gray-500">Hi I'm Jeff Nice to meet ya!</p>
            </div>

            {/* Time */}
            
            <div className="flex-col space-y-2">
                <p className="text-gray-500">9:00 A.M</p>
            </div>
        </div>
    )
}

export default Chat