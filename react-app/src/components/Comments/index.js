import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeComment, profileComments } from "../../store/comments"
import { getAllUsers } from "../../store/session"
import CommentFormModal from "../EditComments/EditCommentsModal"

const Comments = ({ profile, user }) => {
  const dispatch = useDispatch()
  const commentsObj = useSelector(state => state.comments)
  const users = useSelector(state => state.session.users)

  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  useEffect(() => {
    dispatch(profileComments(profile?.id))
  }, [dispatch, profile?.id])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  let comments
  if (commentsObj) {
    comments = Object.values(commentsObj)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const newComment = {
      comment,
      rating: +rating,
      profileId: +profile?.id,
      userId: +user?.id,
    }
    await dispatch(makeComment(newComment))
    setComment('')
  }

  return (
    <>
      <div>
        {comments?.length > 0 &&
          comments.map(comment => (
            <div>
              <p>{users[comment.userId]?.firstName} {users[comment.userId]?.lastName}</p>
              <p key={comment.id}>{comment.comment}</p>
              <div>
                {user?.id === comment?.userId &&
                  <CommentFormModal
                    user={user}
                    profile={profile}
                    id={comment?.id}
                    editComment={comment?.comment}
                    editRating={comment?.rating}
                  />
                }
              </div>
            </div>
          ))
        }
      </div>
      {user &&
        <form onSubmit={onSubmit}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment..."
          />
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button>Submit</button>
        </form>
      }
    </>
  )

}

export default Comments
