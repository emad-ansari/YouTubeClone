import { sideBarIcons } from '../data/sideBarIcons';
import { twMerge } from 'tailwind-merge'
import Button, { buttonStyles } from "./Button";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { SideBarItemProps, LargeSideBarSectionProps } from '../utils/props';
import { Children, useState } from 'react';
import { SideBarUserItems, playlists , subscriptions, explores} from '../data/sideBarIcons';


interface SideBarProps {
    toggleSideBar: boolean;
}



export const SideBar = ({toggleSideBar}: SideBarProps) => {
    console.log(toggleSideBar)

    return (
        <>
            <aside className = {`${toggleSideBar ? "pb-4 flex flex-col ml-1 overflow-y-auto px-2" : 'hidden'}`}>
                {
                    sideBarIcons.map((icon, index) => (
                        <SmallSideBarItem key = {index} Icon = { icon.Icon } title = {icon.title} url = {icon.url}/> 
                    ))
                }
            </aside>
            <aside className = {` w-72 pb-4 flex flex-col gap-2 px-2  overflow-y-auto flex-shrink-0 ${!toggleSideBar ? "": "hidden"}`}>
                <LargeSideBarSection >
                    {
                        sideBarIcons.map((item, index )=> (
                            <LargeSideBarItem  key = {index} Icon={item.Icon} title = {item.title} url={item.url}/>
                        ))

                    }
                </LargeSideBarSection>
                <hr />
                <LargeSideBarSection visibleItemCount={5} title='You'>
                    {
                        SideBarUserItems.map((userItem, index) => (
                            <LargeSideBarItem  key = {index} Icon={userItem.Icon} title = {userItem.title} url={userItem.url}/>
                        ))
                    }
                    {
                        playlists.map(playlist => (
                            <LargeSideBarItem  
                                key = {playlist.id}
                                Icon={RiPlayList2Fill}
                                title = {playlist.name}
                                url={`/playlist?list=${playlist.id}`}
                            />
                        ))

                    }
                </LargeSideBarSection>
                <hr />
                <LargeSideBarSection title='Subscription' visibleItemCount={5}>
                    {
                        subscriptions.map(subscription => (
                            <LargeSideBarItem  
                                key = {subscription.id}
                                Icon={subscription.imgUrl}
                                title = {subscription.channelName}
                                url={`/@${subscription.id}`}
                            />
                        ))
                    }

                </LargeSideBarSection>
                <hr />
                <LargeSideBarSection title='Explore ' visibleItemCount={5}>
                    {
                        explores.map(explore => (
                            <LargeSideBarItem  
                                key = {explore.id}
                                Icon={explore.Icon}
                                title = {explore.title}
                                url={`/@${explore.id}`}
                            />
                        ))
                    }

                </LargeSideBarSection>

            </aside>
        </>
        
    )

}

const SmallSideBarItem = ({Icon, title, url}: SideBarItemProps) => {
    return <a href= {url} className = {twMerge(buttonStyles({variant: 'ghost' }), 'py-4  flex flex-col items-center rounded-lg gap-1')}>
        <Icon className = 'w-6 h-6'/>
        <div className = 'text-[11px]'>{title}</div>
    </a>
}

const LargeSideBarSection = ({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSideBarSectionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const childrenArray = Children.toArray(children);
    const showExpandButton = childrenArray.length > visibleItemCount;
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount);
    const ButtonIcon = isExpanded ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown

    return <div>
        {title && <div className = 'ml-4 mt-2 text-base mb-1'>{title}</div>}
        {visibleChildren}
        {
            showExpandButton && 
            <Button
                variant = 'ghost'
                className = 'w-full flex items-center rounded-lg gap-4  p-3'
                onClick = {() => setIsExpanded(prevState => !prevState)}
            >
                <ButtonIcon className = 'w-5 h-5' /> 
                <div className='text-sm'>{isExpanded ? 'Show Less' : 'Show More'}</div>
            </Button>
        }
    </div>
}

const LargeSideBarItem = ({ Icon, title, url, isActive}: SideBarItemProps) => {
    return <a href= {url} className = {twMerge(buttonStyles({ variant: "ghost"}), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? 'font-bold bg-neutral-100 hover:bg-secondary': undefined}` ) }>
        {
            typeof Icon === 'string' ? (
                <img src= {Icon} alt="Channel Profile" className = 'w-6 h-6 rounded-full' />
            ) : (
                <Icon className = 'w-6 h-6'/> 
            )
        }

        <div className = 'whitespace-nowrap overflow-hidden text-ellipsis text-sm'>{title}</div>
    </a>

}