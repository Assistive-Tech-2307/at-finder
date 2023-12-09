import './CommentSection.css'
import CommentCard from './CommentCard'

function CommentSection ({comments}) {
  console.log('beep', comments)
  
  return (
    <div>
      {comments.map((comment) =>
        <CommentCard comment={comment} key={comment.id}/>
      )
      }
    </div>
  )
}

export default CommentSection


