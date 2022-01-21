import { useState } from "react";
import { Modal } from '../context/Modal'
import LoginForm from './LoginForm'
import '../NavBar/NavBar.css'

const LoginFormModal = () => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
        className="nav-buttons"
      >
        Login
      </button>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <LoginForm setModal={setModal} />
        </Modal>
      )}
    </div>
  )
}

export default LoginFormModal;
