import Image from "next/image";

const Chat = ({ image, name, clicked }) => {
    return(
        <div className={clicked ? "flex justify-between   items-center py-3 px-3 bg-gray-200":"flex justify-between   items-center py-3 px-3 bg-gray-100"}>
            {/* Image */}

            <img className="rounded-full h-[50px] w-[50px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={70} width={70}/>

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