const ChatBubble = ({name, time, message, receiving, image}) => {
    return(
        <div className={receiving ? "flex ml-[50%] bg-gray-100  rounded-lg w-auto max-w-[300px] z-10":"flex  bg-gray-100  rounded-lg w-auto max-w-[300px] z-10"}>
            <div className="flex-col pt-2 ">
                <h2 className={receiving ? "text-red-600 ml-3 font-serif":"text-green-600 ml-3 font-serif"}>{name}</h2>
                <div className="flex-col ">
                    {/* Message and time */}
                    <p className="text-gray-700 ml-3">{message}<span className="text-gray-500  ml-4 mt-2">{time}</span></p>
                    {/* <h3 className="text-gray-500 flex justify-end ">{time}</h3> */}
                </div>

                
            </div>
        </div>
     
    )
}

export default ChatBubble