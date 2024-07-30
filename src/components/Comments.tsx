import { formatTimeAgo } from "../utils/formatTimeAgo"
import Button from "./Button"
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { useState} from 'react'
import { AddNewComment } from "./AddNewComment";

interface CcommentProps {
    id: number,
    comment: string,
    emailId: string,
    postedAt: Date,
    profileUrl: string,
    likes: number
}


export const Comments  = ({...props} : CcommentProps) => {
    const[userLikes, setUserLikes] = useState<number>(0);
    const[isOpenCommentBox, setIsOpenCommentBox] = useState<boolean>(false);


    return (
        <div className = 'flex mt-8 gap-4'>
            <div className = ''>
                <img src= {props.profileUrl} alt="UserProfileUrl" className = 'w-10 h-10 rounded-full'/>
            </div>
            <div className = 'flex flex-col gap-1 w-full' >
                <div className = 'flex gap-2 items-center'>
                    <span className = 'text-sm font-medium'>{props.emailId}</span>
                    <span className = 'text-xs text-gray-600 font-medium'>{formatTimeAgo(props.postedAt)}</span>
                </div>
                <span className = 'text-sm'>{props.comment}</span>
                <div className = 'flex items-center gap-4'>
                    <div className = 'flex items-center gap-1.5'>
                        <Button variant = 'ghost' size = 'icon'className = 'flex itmes-center' onClick = {() => setUserLikes(prevLike => prevLike + 1)}>
                            <AiOutlineLike style = {{fontSize: '25px'}}/>  
                        </Button>
                        <span className = 'text-sm '>{userLikes}</span>   

                        <Button variant = 'ghost' size = 'icon'className = 'flex itmes-center '>
                            <AiOutlineDislike style = {{fontSize: '25px'}}/>  
                        </Button>
                    </div>
                   
                    <Button 
                        variant = 'ghost' 
                        className = 'flex itmes-center rounded-full px-3 py-2 text-xs font-medium '
                        onClick = {() => setIsOpenCommentBox(true)}
                    >
                        Reply
                    </Button>
                  

                </div>
                {
                    isOpenCommentBox && (
                        <AddNewComment 
                            isReplyBox = {true }
                            channelProfileUrl= {props.profileUrl}
                            onCancel = {setIsOpenCommentBox}
                        />
                    )
                }

            </div>
        </div>
    )
}