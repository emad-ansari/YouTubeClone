import { VideoSection } from "../components/VideoSection";
import { CommentSection } from "../components/CommentSection";
import { watchPageCategories } from "../data/home";
import { CategoryPills } from "../components/CategoryPills";
import { useState } from 'react';
import { VideosPlaylist } from "../components/VideosPlaylist";
import { videos } from "../data/home";
import { shorts } from "../data/shorts";
import { YoutubeShort } from "../components/YoutubeShort";
import { SiYoutubeshorts } from "react-icons/si";

export const WatchPage = () => {
    const[selectedCategory, setSelectedCategory] = useState<string>(watchPageCategories[0])
    const[firstPlaylist, setFirstPlaylist] = useState(videos[0]);

    return (
        <>
            <main className = 'fixed top-12 bottom-0 left-0 right-0 lg:flex lg:flex-row overflow-hidden pt-1 '>   
                <section className = 'basis-3/4 flex flex-col  overflow-scroll px-6'>
                    <VideoSection/>
                    <CommentSection /> 
                </section>

                <section className = ' flex-shrink-0 lg:w-[450px] overflow-y-scroll flex-col '>
                    <div className = ' pt-4 flex flex-col gap-1 pb-10'>
                        <CategoryPills 
                            categories = {watchPageCategories}
                            selectedCategory = {selectedCategory}
                            onSelect={setSelectedCategory}
                        />
                        <VideosPlaylist 
                            id={firstPlaylist.id}
                            title={firstPlaylist.title}
                            videoUrl={firstPlaylist.videoUrl}
                            channel={firstPlaylist.channel}
                            views={firstPlaylist.views}
                            postedAt={firstPlaylist.postedAt} 
                            duration={0} 
                            thumbnailUrl={firstPlaylist.thumbnailUrl}                            
                        />

                    </div>
                    
                    <div id = 'Youtube-short-section' className = 'flex flex-col gap-5 border-b border-gray-300 pb-5'>
                        <div className="flex flex-row gap-2 items-center"> 
                            <SiYoutubeshorts style = {{fontSize: '22px', color: '#f70000'}}/> 
                            <span className="text-xl font-bold"> Shorts </span>
                        </div>
                        <div className = 'flex gap-1.5 overflow-auto'>
                            {
                                shorts.map(short => (
                                    <YoutubeShort 
                                        thumbnailUrl={short.thumbnailUrl}
                                        title={short.title} 
                                        views={short.views}
                                    />
                                ))
                            }
                        </div>
                        
                    
                    </div>
                    <div className = 'py-3 flex flex-col gap-4'>
                        {
                            videos.map(playlist => (
                                <VideosPlaylist 
                                id={firstPlaylist.id}
                                title={firstPlaylist.title}
                                videoUrl={firstPlaylist.videoUrl}
                                channel={firstPlaylist.channel}
                                views={firstPlaylist.views}
                                postedAt={firstPlaylist.postedAt} 
                                duration={0} 
                                thumbnailUrl={firstPlaylist.thumbnailUrl}                            
                            />
                            ))
                        }
                        
                    </div>
                </section>
            </main>
        </>
    )
}