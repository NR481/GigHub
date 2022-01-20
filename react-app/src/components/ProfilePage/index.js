import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getFeaturedProfiles } from "../../store/profiles"
import BookingSideBar from "../BookingSideBar"
import EditProfileModal from "../EditProfile/EditProfileModal"

const ProfilePage = () => {
  const profileObj = useSelector(state => state.profiles)
  const user = useSelector(state => state.session.user)
  const { id } = useParams()
  const dispatch = useDispatch()

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch])

  const onClick = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  const profile = profileObj[id]

  return (
    <>
      <div>
        <img src={profile?.imageUrl} alt="artist pic" />
        <h2>{profile?.name}</h2>
        <p>{profile?.description}</p>
        <h2>See what all the buzz is about...</h2>
      </div>
      <button onClick={onClick}>Book This Artist</button>
      {showForm &&
        <BookingSideBar />
      }
      {user?.id === profile?.userId &&
        <EditProfileModal id={profile?.id} editName={profile?.name} editDescription={profile?.description} editImageUrl={profile?.imageUrl} editCategory={profile?.category} editLocation={profile?.location} userId={user?.id} />
      }
    </>
  )
}

export default ProfilePage
