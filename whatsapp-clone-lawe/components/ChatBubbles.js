import BottomRight from "./BottomRight"
import ChatBubble from "./ChatBubble"

const ChatBubbles = () => {
    return(
        <div className=" max-h-[78vh] overflow-y-scroll flex-col">
            {/* Map through list of chats and return chat bubbles */}
            <div className="flex-col space-y-6 mt-8 ml-[80px]">
                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ "/>
                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ" receiving={true}/>
                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ"/>

                <ChatBubble name="Lawgavin Busces" time="9:00 AM" message="Hello. I hope you are doing well. I am wrtiting to ask you about getting a catalytic converter delete on my FJ" receiving={true}/>


            </div>

        </div>
    )
}

export default ChatBubbles