import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeComment, updateComment } from "../../store/comments"

const EditCommentForm = ({ id, user, profile, editComment, editRating, setModal }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState(editComment)
  const [rating, setRating] = useState(editRating)

  const onSubmit = async (e) => {
    e.preventDefault()
    const editedComment = {
      comment,
      rating,
      profileId: +profile?.id,
      userId: +user?.id
    }
    await dispatch(updateComment(editedComment, id))
    setModal(false)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(removeComment(id))
  }

  return (
    <>
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
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  )
}

export default EditCommentForm
