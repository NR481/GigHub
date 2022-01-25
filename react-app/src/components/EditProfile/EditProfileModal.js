import { useState } from "react";
import { Modal } from '../context/Modal'
import EditProfileForm from '.'
import '../ProfilePage/ProfilePage.css'

const EditProfileModal = ({ id, editName, editDescription, editImageUrl, editCategory, editLocation, userId }) => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
        className="edit-profile-button"
      >
        Edit Profile
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <EditProfileForm setModal={setModal} id={id} editName={editName} editDescription={editDescription} editImageUrl={editImageUrl} editCategory={editCategory} editLocation={editLocation} userId={userId} />
        </Modal>
      )}
    </div>
  )
}

export default EditProfileModal
