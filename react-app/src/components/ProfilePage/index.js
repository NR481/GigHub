import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getFeaturedProfiles } from "../../store/profiles"
import BookingSideBar from "../BookingSideBar"
import Comments from "../Comments"
import EditProfileModal from "../EditProfile/EditProfileModal"
import './ProfilePage.css'

const ProfilePage = () => {
  const profileObj = useSelector(state => state.profiles)
  const user = useSelector(state => state.session.user)
  const { id } = useParams()
  const dispatch = useDispatch()

  const profile = profileObj[id]

  const [showForm, setShowForm] = useState(false)
  const [profileRating, setProfileRating] = useState(0)

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch, profileRating])

  const onClick = () => {
    setShowForm((prevState) => !prevState)
  }

  console.log(profileRating, profile?.rating)

  return (
    <div className="profile-page">
      <div className="profile-page-container">
        <div className="image-btn">
          <img src={profile?.imageUrl} alt="artist pic" className="profile-page-img"/>
          <button onClick={onClick}>Book This Artist</button>
        </div>
        <div className="profile-page-info">
          <h2>{profile?.name}</h2>
          <p>{profile?.rating}</p>
          <p>{profile?.description}</p>
        </div>
      </div>
      <BookingSideBar showForm={showForm}/>
      <div className="comments-container">
        <h2>See what all the buzz is about...</h2>
        <Comments profile={profile} user={user} setProfileRating={setProfileRating} />
        {user?.id === profile?.userId &&
          <EditProfileModal
            id={profile?.id}
            editName={profile?.name}
            editDescription={profile?.description}
            editImageUrl={profile?.imageUrl}
            editCategory={profile?.category}
            editLocation={profile?.location}
            userId={user?.id}
          />
        }
      </div>
    </div>
  )
}

export default ProfilePage
