import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileComments } from "../../store/comments"

const Comments = ({ profile }) => {
  const dispatch = useDispatch()
  const commentsObj = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(profileComments(profile?.id))
  }, [dispatch, profile?.id])

  let comments
  if (commentsObj) {
    comments = Object.values(commentsObj)
  }

  return (
    <div>
      {comments?.length > 0 &&
        comments.map(comment => (
          <p key={comment.id}>{comment.comment}</p>
        ))
      }
    </div>
  )

}

export default Comments
