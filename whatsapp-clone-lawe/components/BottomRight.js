import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
const BottomRight = () => {
    return(
        <div className="bg-nav-gray flex space-x-4 justify-between p-3 -mt-[15px] z-50 relative bottom-0">
            <EmojiEmotionsIcon className="h-8 text-gray-600"/>

            <input className="flex-1 bg-white p-2 focus:outline-none"/>

            <MicIcon className="h-8 text-gray-600" />
        </div>
    )
}
export default BottomRight