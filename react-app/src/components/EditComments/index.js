import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeComment, updateComment } from "../../store/comments"
import './EditComments.css'

const EditCommentForm = ({ id, user, profile, editComment, editRating, setModal, setProfileRating }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState(editComment)
  const [rating, setRating] = useState(editRating)

  const onSubmit = async (e) => {
    e.preventDefault()
    const editedComment = {
      comment,
      rating: +rating,
      profileId: +profile?.id,
      userId: +user?.id
    }
    await dispatch(updateComment(editedComment, id))
      .then(() => setProfileRating(profile?.rating))
    setModal(false)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(removeComment(id))
      .then(() => setProfileRating(profile?.rating))
  }

  return (
    <div>
     <form onSubmit={onSubmit} className="edit-comments-form">
       <div className="edit-comments-inputs">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          required
        />
        <label>Rating: </label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value='1'>★</option>
          <option value='2'>★★</option>
          <option value='3'>★★★</option>
          <option value='4'>★★★★</option>
          <option value='5'>★★★★★</option>
        </select>
        </div>
        <div className="edit-comments-buttons">
          <button>Submit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default EditCommentForm
