import { useState } from "react";
import { Modal } from '../context/Modal'
import EditCommentForm from './index'
import '../Comments/Comments.css'

const CommentFormModal = ({ id, user, profile, editComment, editRating }) => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
        className="comment-edit-button"
      >
        Edit
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditCommentForm
            setModal={setModal}
            id={id}
            user={user}
            profile={profile}
            editComment={editComment}
            editRating={editRating}
          />
        </Modal>
      )}
    </div>
  )
}

export default CommentFormModal;
