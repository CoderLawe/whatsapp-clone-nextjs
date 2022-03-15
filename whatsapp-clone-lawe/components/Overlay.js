import Image from "next/image";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from "@mui/icons-material/Search";
import Chats from "./Chats";
import RightNav from "./RightNav";
const Overlay = () => {
    return(
        <div className=" bg-gray-300 mx-5 my-7 z-50 -mt-16 h-[95vh] shadow-lg ">
            
            <div className="flex">
             {/* Left side */}

                <div className="flex-col lg:w-1/3">

                    <div className=" bg-nav-gray flex justify-between items-center">
                        {/* Left side */}

                        <div className="px-4 py-2">
                            <img  className="h-[50px] w-[50px] rounded-full" src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" />
                        </div>

                        {/* Icons */}

                        <div  className="flex space-x-6 mr-4 items-center">
                            <MessageIcon className="h-10 w-10 text-gray-500"/>
                            <MoreVertIcon className="h-10 w-10 text-gray-500"/>
                        </div>

                        {/* Chats */}

                    </div>

                    <div className="bg-white flex space-x-2 items-center px-4">
                        <SearchIcon className="h-10 w-10 text-gray-400"/>
                        <input className="p-6 bg-transparent focus:outline-none" type="text" placeholder="Type here to place a search"/>
                    </div>

                    <Chats />

                    </div>     


                <div>
                    {/* Right Side */}
                    <RightNav />

                </div>
        </div>
           
        </div>
    )
}

export default Overlay