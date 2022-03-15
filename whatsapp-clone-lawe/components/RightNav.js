import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const RightNav = () => {
    return(
        <div className="flex bg-nav-gray p-2 border-l border-gray-300 items-center justify-between   ">
            {/* Right side */}
            <div className="flex space-x-3 flex-1 items-center">
                {/* Image */}
             
                <img className="rounded-full h-[50px] w-[50px]" src="https://cdn.discordapp.com/attachments/817048198022430761/950061483608391751/f1.png" height={70} width={70}/>
                {/* Name */}
                <div className="flex-col">
                    <p>Name goes here dude</p>
                </div>
            </div>

            {/* Left side */}

            {/* Icons */}

            <div className="flex space-x-4 items-center">
                <AttachFileIcon className="h-8 w-8 text-gray-500"/>
                <MoreVertIcon className="h-8 w-8 text-gray-500"/>


            </div>
        </div>
    )
}

export default RightNav