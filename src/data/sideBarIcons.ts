import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiUserSquareFill } from "react-icons/pi";
import { RiHistoryLine } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlateLight } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { CiStreamOn } from "react-icons/ci";
import { AiTwotoneBulb } from "react-icons/ai";
import { MdOutlinePodcasts } from "react-icons/md";



export const sideBarIcons = [
    {
        Icon: GoHome, 
        title: "Home",
        url: '/'

    },
    {
        Icon: SiYoutubeshorts, 
        title: "Shorts",
        url: '/shorts'

    },
    {
        Icon: MdSubscriptions, 
        title: "Subscription",
        url: '/subscription'

    },
    {
        Icon: MdOutlineVideoLibrary, 
        title: "Library",
        url: '/library'

    }
]

export const SideBarUserItems = [
    {
        Icon: PiUserSquareFill, 
        title: "Your channel",
        url: '/me/channel'

    },
    {
        Icon: RiHistoryLine, 
        title: "History",
        url: '/me/history'

    },
    {
        Icon: RiVideoLine, 
        title: "Your videos",
        url: '/me/videos'

    },
    {
        Icon: MdOutlineWatchLater, 
        title: "Watch Later",
        url: '/me/watch-later'

    },

]

export const playlists = [
    {
        id: 1,
        name: 'Spoken English Class',
    },
    {
        id: 2,
        name: 'Java Script full Course',
    },

    {
        id: 3,
        name: 'React',
    },
    {
        id: 4,
        name: 'TypeScript',
    },
    {
        id: 5,
        name: 'Computer Networking',
    },
    {
        id: 6,
        name: 'Next Js',
    },
]

export const subscriptions = [
    {
        id: 1,
        imgUrl: 'https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj',
        channelName: 'Harkirat Singh',
    },
    {
        id: 2,
        imgUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s900-c-k-c0x00ffffff-no-rj',
        channelName: 'Web Dev Simplified',
    },
    {
        id: 3,
        imgUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_lBsjXx6eJ7L26I_dGpRjq8mUkuSmbw8D2_ksKu8w=s900-c-k-c0x00ffffff-no-rj',
        channelName: 'freeCodeCamp',
    },
    {
        id: 4,
        imgUrl: 'https://pbs.twimg.com/media/EuvUyXdUcAMZ9dz.jpg',
        channelName: 'Shaykh Saqib Iqbal',
    },
    {
        id: 5,
        imgUrl: 'https://yt3.googleusercontent.com/JfcqVinxsIc8dYsPIrp6IBDRMBb420BqVd2bzS9wqcMWBTzmnjUJ74Q0VByY1gUA8p-AYZQzxQ=s900-c-k-c0x00ffffff-no-rj',
        channelName: 'developedbyed',
    },
    {
        id: 6,
        imgUrl: 'https://yt3.googleusercontent.com/NWwgqGoShbrlqazHYUj0bLq1GZEX-oEi8F5Mh8FO0_84tEZQo1SMqXAiUlS-CHkFBhIK1Zi_=s900-c-k-c0x00ffffff-no-rj',
        channelName: 'Yusuf Truth',
    },
]


export const explores = [
    {
        id: 1,
        Icon: BsFire,
        title: "Trending"
    },
    {
        id: 2,
        Icon: HiMiniShoppingBag,
        title: "Shoping",
    },
    {
        id: 3,
        Icon: IoMdMusicalNote,
        title: "Music",
    },
    {
        id: 4,
        Icon: PiFilmSlateLight,
        title: "Films",
    },
    {
        id: 5,
        Icon: SiYoutubegaming,
        title: "Gaming",
    },
    {
        id: 6,
        Icon: CiStreamOn,
        title: "Live",
    },
  
    {
        id: 7,
        Icon: AiTwotoneBulb,
        title: "Courses",
    },
    {
        id: 8,
        Icon: MdOutlinePodcasts,
        title: "Podcasts",
    },


]