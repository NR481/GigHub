import { useState } from "react";
import { Modal } from '../context/Modal'
import EditCommentForm from './index'

const CommentFormModal = ({ id, user, profile, editComment, editRating }) => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
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
