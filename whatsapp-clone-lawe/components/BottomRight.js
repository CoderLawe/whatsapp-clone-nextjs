import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import { useState, useContext } from "react";
import { ChatContext } from "./context/ChatContext";

const BottomRight = () => {
    const [chatsList, setChatsList] = useContext(ChatContext)
    const [message, setMessage] = useState()
    return(
        <div className="bg-nav-gray flex space-x-4 justify-between p-3  z-50 bottom-0 mb-[23px]  fixed w-[69.5vw] ">
            <EmojiEmotionsIcon className="h-8 text-gray-600"/>

            <input className="flex-1 bg-white p-2 focus:outline-none"/>

            <MicIcon className="h-8 text-gray-600" />
        </div>
    )
}
export default BottomRight