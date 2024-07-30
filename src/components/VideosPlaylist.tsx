import { IoIosCheckmarkCircle } from "react-icons/io"
import { VideoGridItemProps as VideosProps } from "./VideoGridItem"
import { formatViews } from "../utils/formatViews"
import { formatTimeAgo } from "../utils/formatTimeAgo"
import { MdOutlineWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import Button from "./Button";
import { useState } from "react";

export const VideosPlaylist = ({id, videoUrl, title, channel, views, postedAt, thumbnailUrl}: VideosProps) => {
    const[isIconShow, setIsIconShow] = useState<boolean>(false);



    return (
        
        <div className = 'flex gap-2'>
            <div 
                className="relative cursor-pointer"
                onMouseEnter ={() => setIsIconShow(true)}
                onMouseLeave={() => setIsIconShow(false)}
            >
                <img src= {thumbnailUrl} alt="Video Playlist" className = 'relativ object-cover w-44 h-24 rounded-xl ' />
                {/* <video src= {videoUrl} className = 'absolute top-0   object-cover w-44 h-24 rounded-xl' controls></video> */}
                <Button variant={'ghost'} className = {`absolute bg-gray-700 top-2 right-1 rounded-md px-1 py-1 hover:bg-gray-700 ${isIconShow ? "": 'hidden'}`}>
                    <MdOutlineWatchLater style = {{fontSize: '22px', color: 'white'}} /> 
                </Button>
                <Button variant = 'ghost' className={`absolute bg-gray-700 top-11 right-1 rounded-md px-1.5 py-1.5 hover:bg-gray-700 ${isIconShow ? "": 'hidden'}`}>
                    <RiPlayList2Fill style = {{fontSize: '18px', color: 'white'}} /> 
                </Button>

            </div>

            <div className = 'flex flex-col gap-1'>
                <span className="text-sm font-medium text-wrap ">{title}</span>
                <div className = 'flex gap-1 '>
                    <span className="text-xs text-gray-500">{channel.name}</span>
                    <IoIosCheckmarkCircle  style = {{color: '#4b5563' }}/>
                </div>
                <div className = 'flex gap-2'>
                    <span className="text-[12px] text-gray-500">{formatViews(views)} views</span>
                    <span className="text-[12px] text-gray-500">{formatTimeAgo(postedAt)}</span>
                </div>

            </div>

        </div>
    )
}