import { useState } from 'react'
import Button from './Button';
import { MdSort } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { VideoGridItemProps } from './VideoGridItem';
import { videos } from '../data/home';
import { AddNewComment } from './AddNewComment';
import { Comments } from './Comments';
import { comments } from '../data/comments';


export const CommentSection = () => {
    const {videoId }= useParams();
    const[noOfComments, setNoOfComments] = useState<number>(126);
    const currentVideo: VideoGridItemProps = videos.find(video => video.id === videoId)!
    console.log(currentVideo)
    
    return (
        <div id = 'comment-section' className = 'rounded-lg'>
            <div className = 'flex gap-7 items-center'>
                <span className = 'text-lg font-bold'>{noOfComments} Comments</span>
                <Button variant={'ghost'} className = 'bg-secondary hover:bg-secondary-hover flex items-center gap-3 rounded-md px-2 py-2'>
                    <MdSort style = {{fontSize: '20px'}} /> 
                    <span className = 'text-sm font-medium'>Short by</span>
                </Button>
            </div>
            <div id = 'add-new-comments' className = 'mt-5'>
                <AddNewComment channelProfileUrl = {currentVideo.channel.profileUrl} isReplyBox = {false} /> 
            </div>
            <div>
                {
                    comments.map(comment => (
                        <Comments 
                            key={comment.id}
                            comment={comment.comment}
                            emailId={comment.emailId}
                            postedAt={comment.postedAt}
                            profileUrl={comment.profileUrl}
                            likes={comment.likes} 
                            id={comment.id}
                        />
                    ))
                }
            </div>

        </div>
    )
}