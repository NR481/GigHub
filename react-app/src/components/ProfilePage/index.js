import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getFeaturedProfiles } from "../../store/profiles"

const ProfilePage = () => {
  const profileObj = useSelector(state => state.profiles)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch])

  const profile = profileObj[id]

  return (
    <div>
      <img src={profile?.imageUrl} alt="artist pic" />
      <h2>{profile?.name}</h2>
      <p>{profile?.description}</p>
    </div>
  )
}

export default ProfilePage
