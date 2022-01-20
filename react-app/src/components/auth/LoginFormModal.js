import { useState } from "react";
import { Modal } from '../context/Modal'
import LoginForm from './LoginForm'

const LoginFormModal = () => {
  const [modal, setModal] = useState(false)

  return(
    <div>
      <button
        onClick={() => setModal(true)}
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
