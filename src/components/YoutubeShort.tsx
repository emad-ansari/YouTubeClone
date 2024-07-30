import { formatViews } from "../utils/formatViews";

interface YoutubeShortProps {
    thumbnailUrl: string;
    title: string
    views: number;
}


export const YoutubeShort = ({thumbnailUrl, title, views}: YoutubeShortProps) => {

    return (
        <div className ='flex flex-col gap-2 rounded-xl border border-t-gray-300'>
            
            <div className="w-36 h-52 rounded-xl ">
                <a href="/">
                    <img src= {thumbnailUrl}alt="Short video" className = 'w-full h-full rounded-xl object-cover'/>
                </a>

            </div>
            <div className="flex flex-col gap-1 basis-1/4 ">
                <span className="text-[13px] font-medium text-black ">{title}</span>
                <span className="text-xs font-medium text-gray-500">{formatViews(views)} views</span>
            </div>
        </div>
    )


}