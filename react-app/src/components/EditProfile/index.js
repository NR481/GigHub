import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { modifyProfile, removeProfile } from "../../store/profiles"
import './EditProfile.css'

const EditProfileForm = ({ id, setModal, editName, editDescription, editImageUrl, editCategory, editLocation, userId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState(editName)
  const [description, setDescription] = useState(editDescription)
  const [imageUrl, setImageUrl] = useState(editImageUrl)
  const [category, setCategory] = useState(editCategory)
  const [location, setLocation] = useState(editLocation)
  const [errors, setErrors] = useState([])

  const submitEditProfile = async (e) => {
    e.preventDefault()

    const validationErrors = []
    const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/
    if (!imgRegex.test(imageUrl)) validationErrors.push('Please enter a valid image URL')
    if (description.length < 50) validationErrors.push('Description must be at least 50 characters')
    setErrors(validationErrors)

    if (validationErrors.length === 0) {
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
  }

  const deleteProfile = async (e) => {
    e.preventDefault()
    await dispatch(removeProfile(id))
      .then(() => history.push('/'))
  }

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-errors">
        {errors.length > 0 &&
          errors.map(error => (
            <p key={error}>{error}</p>
          ))
        }
      </div>
      <form onSubmit={submitEditProfile} className="edit-profile-form">
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description of Services</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Musical Genre(s)</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button>Edit</button>
        <button onClick={deleteProfile}>Delete</button>
      </form>
    </div>
  )
}

export default EditProfileForm
