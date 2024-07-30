import { useState } from "react";
import {CategoryPills} from "../components/CategoryPills"
import { SideBar } from "../components/SideBar"
import VideoGridItem from "../components/VideoGridItem"
import { categories, videos } from "../data/home"


interface HomePageProps {
    toggleSideBar: boolean;
}

export const HomePage = ({toggleSideBar}: HomePageProps) => {
    const[selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
    
    return (
        <main id = 'home-page' className = 'fixed top-12 bottom-0 left-0 right-0 flex '>
            <SideBar toggleSideBar = {toggleSideBar} /> 
            <div className = 'basis-full flex flex-col overflow-hidden'>
                <CategoryPills 
                    categories={categories}
                    selectedCategory = {selectedCategory}
                    onSelect = {setSelectedCategory}
                />
                <div className = ' grid gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 h-full px-5 overflow-y-auto '>
                    {
                        videos.map(video => (
                            <VideoGridItem  key={video.id} {...video} />
                        ))
                    }
              
                </div>
            </div>
        </main>
         
    )
}



// <div className = 'flex  flex-col overflow-hidden'>
//     <div className = ' bg-white'>
//         <CategoryPills 
//         categories={categories}
//         selectedCategory = {selectedCategory}
//         onSelect = {setSelectedCategory}
//     />
// </div>
// <div className = 'grid gap-4 grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 h-full px-5 overflow-y-auto '>
// {
//     videos.map(video => (
//     <VideoGridItem  key={video.id} {...video} />
//     ))
// }

// </div> 