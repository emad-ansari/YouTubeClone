import Button from "./Button"
import { LuSmile } from "react-icons/lu";

interface AddNewCommentProps  {
    channelProfileUrl: string,
    isReplyBox: boolean;
    onCancel?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewComment = ({channelProfileUrl, isReplyBox, onCancel }: AddNewCommentProps) => {
    return (
        <div className = 'flex  gap-4  py-1 '>
            <div className = {` h-full ${isReplyBox ? 'pt-1' : ''}`}>
                <img src= {channelProfileUrl} alt="Profile picture" className = {` flex rounded-full ${isReplyBox ? "w-7 h-7 bg-red-500 " : "w-12 h-12 "}`}/>

            </div>
            <div className= 'flex flex-col w-full '>
                
                <input id = 'new-comment' type="text" placeholder='Add a comment...' className='w-full outline-none px-1 py-1 border-b-black border-[1px] bg-transparent bg-none focus:border-2 text-sm border-t-transparent border-l-transparent border-r-transparent'/>
                <div className = 'flex justify-between mt-2'> 
                    <Button size={'icon'} variant={'ghost'}>
                        <LuSmile style = {{fontSize: '22px'}} /> 
                    </Button>
                    
                    <div className='flex items-center gap-3'>
                        <Button 
                            variant={'ghost'}
                            className='rounded-full px-4 py-1.5 '
                            onClick={() => {
                                if (onCancel){
                                    onCancel(false)
                                }
                            }}
                        >
                            Cancel
                        </Button>
                        <Button className='bg-[#065fd4] rounded-full px-4 py-1.5 text-white  hover:bg-blue-700 text-sm font-medium'>{isReplyBox ? "Reply": "Comment"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}