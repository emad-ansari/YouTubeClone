import { useState } from 'react'
import { useParams } from "react-router-dom"
import { videos } from "../data/home";
import { VideoGridItemProps } from "./VideoGridItem";
import { formatSubscriber, formatDislikes } from "../utils/formatSubscriber";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import Button from './Button';
import { formatViews } from '../utils/formatViews';
import { formatTimeAgo } from '../utils/formatTimeAgo';

export const VideoSection = () => {
    const {videoId} =  useParams();
    const[subscriber, setSubscriber] = useState<number>(0);
    const[dislikes, setDislikes] = useState<number>(1.1);
    const currentVideo: VideoGridItemProps = videos.find(video => video.id === videoId)!
    console.log(currentVideo)


    return (
        <div className = 'py-5 relative aspect-video'>
            <div className = 'relative mb-3'>
                <img src= {currentVideo.thumbnailUrl} alt="Video" className = 'rounded-xl w-full  h-full object-cover '/> 
                <video src= {currentVideo.videoUrl} className = 'absolute top-0  object-cover rounded-xl  left-0 right-0 '  playsInline controls></video>
            </div>
            <div className = 'text-black font-bold text-xl'>{currentVideo.title}</div>
            <div className = 'flex justify-between items-center mt-2'>
                <div className = 'flex justify-between items-center  gap-3'>
                    <img src= {currentVideo.channel.profileUrl} alt="Profile picture" className = 'rounded-full w-10 h-10'/>
                    <div className = 'flex '>
                        <div className = 'flex flex-col '>
                            <span className = 'font-medium'>{currentVideo.channel.name}</span>
                            <span className = 'text-gray-600 text-[14px]'>{formatSubscriber(subscriber) } subscribers</span>
                        </div>

                        <div className = 'py-1 px-1'>
                            <IoIosCheckmarkCircle  style = {{color: '#4b5563' }}/>
                        </div>

                    </div>
                    <div id = 'subscribe-button' className = 'px-4'>
                        <Button variant={"ghost"} size={'default'} className= 'bg-secondary hover:bg-secondary-hover rounded-full flex items-center gap-2 px-6 py-1.5 text-bold '>
                            <span className='flex items-center font-medium text-[15px]'>Subscriber</span>
                            <RiArrowDownSLine style = {{fontSize: '20px',  flex: "flex" , alignItems: 'center', paddingTop: '3px'}} />
                        </Button>
                    </div>

                </div>
                <div className = 'flex items-center gap-2 justify-between'>
                    <Button variant={"ghost"} size={"default"} className='rounded-full px-4 flex items-center gap-8 bg-secondary py-1.5 hover:bg-secondary-hover'>
                        <span className='border-r-black text-sm '>{formatDislikes(dislikes)} k</span>
                        <BiDislike style = {{fontSize: '22px', paddingTop: '3px'}}/>

                    </Button>
                    <Button variant={"ghost"} size={"default"} className = 'flex items-center gap-2 rounded-full bg-secondary py-1.5 px-4 hover:bg-secondary-hover'>
                        <PiShareFatThin style = {{fontSize: '22px', paddingTop: '3px'}} />
                        <span className='text-sm font-medium'>Share</span>
                    </Button>
                    <Button variant={"ghost"} className='lg:flex items-center gap-2 bg-secondary rounded-full py-1.5 px-4 hover:bg-secondary-hover hidden '>
                        <LiaDownloadSolid style = {{fontSize: '22px', paddingTop: '3px'}}/> 
                        <span className={`text-sm font-medium`}>Download</span>
                    </Button>
                    <Button variant = 'ghost' size = 'icon' className='rounded-full bg-secondary hover:bg-secondary-hover'>
                        <BsThreeDots /> 
                    </Button>
                </div>

            </div>

            <div id = 'description' className = 'mt-3 bg-secondary rounded-lg px-3 py-2 h-20' >
                <div className='font-medium text-sm'>{formatViews(currentVideo.views)} views {formatTimeAgo(currentVideo.postedAt)} </div>


            </div>
            

        </div>

    )
}