import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { getFeaturedProfiles, addProfile } from "../../store/profiles"
import './MainPage.css'

const MainPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const profilesObj = useSelector(state => state.profiles)
  const user = useSelector(state => state.session.user)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch])

  let featuredProfiles
  if (profilesObj) {
    featuredProfiles = Object.values(profilesObj)
  }

  const submitNewProfile = async (e) => {
    e.preventDefault()

    const newProfile = {
      name,
      description,
      imageUrl,
      category,
      location,
      userId: +user?.id
    }
    await dispatch(addProfile(newProfile))
      .then((res) => history.push(`/profiles/${res.id}`))
  }


  return (
    <div>
      <img
        src='https://images.unsplash.com/photo-1573006939324-641d31296356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        className='splash-img'
      />
      <h2>Featured Artists</h2>
      <div className="featured-artists">
        {featuredProfiles?.length > 0 &&
          featuredProfiles?.map(profile => (
            <img
              src={profile.imageUrl}
              alt='artist headshots'
              className="profile-img"
            />
          )
        )}
      </div>
      <h2>Create an artist profile and start getting booked!</h2>
      <form onSubmit={submitNewProfile}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description of services"
          required
        />
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Musical Genre"
          required
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <button>Create Profile</button>
      </form>
    </div>
  )
}

export default MainPage
