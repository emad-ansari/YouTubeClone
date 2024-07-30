import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import { RiVideoUploadLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { MdOutlineMic } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "./Button";

interface HeaderProps {
    setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({setToggleSideBar}: HeaderProps) => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState<boolean>(false)

    return (
        <header>
            <nav className = 'flex gap-10 lg:gap-20 justify-between py-1.5 items-center  fixed top-0 left-0 right-0 z-50 '>
                <div className ={`gap-4 items-center flex-shrink-0 px-5 h-full ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
                    <Button 
                        variant = 'ghost' 
                        size = 'icon'
                        onClick = {() => setToggleSideBar(prevState => !prevState)}
                    >
                        <FiMenu className = 'text-2xl'/>
                    </Button>

                    <a
                        className = 'flex gap-0.5 items-center'
                        href = '/'
                    >
                        <Button>
                            <FaYoutube style = {{color: '#f70000',  fontSize: "30px" }}/>
                        </Button>
                        <span className = 'text-xl font-oswald font-normal '>YouTube</span>
                    </a>
                </div>
                <div className ={`gap-4 flex-grow justify-center px-4  ${showFullWidthSearch ? 'flex' : 'hidden md:flex'}`} >

                    <Button
                        variant={'ghost'}
                        size = 'icon'
                        className = {`flex-shrink-0 ${showFullWidthSearch ? '': 'hidden'}`}
                        onClick = {() => setShowFullWidthSearch(false)}
                    >
                        <FaArrowLeft/>
                    </Button>
                    <div className = 'flex flex-grow items-center max-w-[650px]'>
                        <input
                            type = 'search'
                            placeholder={'Search...'}
                            className = 'rounded-l-full border border-secondary-border shadow-inner shadow-secondary  w-full py-1 px-4 text-lg focus:border-blue-500 outline-none'/>
                        <Button size = "default"  variant = 'ghost' className = 'bg-gray-200 py-2.5 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0'>
                           <GoSearch/>
                        </Button>
                    </div>
                    <Button type = "button" size= 'icon' className = 'flex-shrink-0 bg-gray-200' >
                        <MdOutlineMic className = 'text-5xl'/>
                    </Button>
                </div>
                <div className= {`h-full items-center justify-between px-2 flex-shrink-0 md:gap-2 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
                    <Button
                        size = 'icon'
                        variant= 'ghost'
                        className = 'md:hidden'
                        onClick = {() => setShowFullWidthSearch(true)}
                    >
                        <GoSearch className = 'text-3xl'/>
                    </Button>
                    <Button size = 'icon' variant= 'ghost' className = 'md:hidden bg-gray-200'>
                        <MdOutlineMic className = 'text-5xl'/>
                    </Button>

                    <Button size = 'icon' variant= 'ghost'>
                        <RiVideoUploadLine className = 'text-3xl'/>
                    </Button>

                    <Button size = 'icon' variant= 'ghost'  >
                        <FaRegBell className = 'text-xl'/>
                    </Button>

                    <Button size = 'icon' variant= 'ghost'>
                        <FiUser className = 'text-3xl'/>
                    </Button>
                </div>
            </nav>


        </header>
    )
}
export default Header;