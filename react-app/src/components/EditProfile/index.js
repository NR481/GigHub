import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { modifyProfile, removeProfile } from "../../store/profiles"

const EditProfileForm = ({ id, setModal, editName, editDescription, editImageUrl, editCategory, editLocation, userId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState(editName)
  const [description, setDescription] = useState(editDescription)
  const [imageUrl, setImageUrl] = useState(editImageUrl)
  const [category, setCategory] = useState(editCategory)
  const [location, setLocation] = useState(editLocation)

  const submitEditProfile = async (e) => {
    e.preventDefault()

    const newProfile = {
      name,
      description,
      imageUrl,
      category,
      location,
      userId
    }
    await dispatch(modifyProfile(newProfile, id))
    setModal(false)
  }

  const deleteProfile = async (e) => {
    e.preventDefault()
    await dispatch(removeProfile(id))
      .then(() => history.push('/'))
  }

  return (
    <form onSubmit={submitEditProfile}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button>Edit</button>
        <button onClick={deleteProfile}>Delete</button>
      </form>
  )
}

export default EditProfileForm
