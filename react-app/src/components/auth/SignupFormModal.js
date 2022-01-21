import { useState } from "react";
import { Modal } from '../context/Modal'
import SignUpForm from './SignUpForm';
import '../NavBar/NavBar.css'

const SignupFormModal = () => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
        className="nav-buttons"
      >
        Sign Up
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <SignUpForm setModal={setModal} />
        </Modal>
      )}
    </div>
  )
}

export default SignupFormModal;
