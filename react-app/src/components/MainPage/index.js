import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { getFeaturedProfiles, addProfile } from "../../store/profiles"
import { searchResults } from "../../store/search"
import MapContainer from "../Map"
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
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch])

  let profiles
  if (profilesObj) {
    profiles = Object.values(profilesObj)
  }

  const featuredProfiles = profiles?.sort((a, b) => b.rating - a.rating)

  const submitNewProfile = async (e) => {
    e.preventDefault()

    const validationErrors = []
    const imgRegex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/
    if (!user) validationErrors.push('Please Log in or Sign up to create a profile')
    if (!imgRegex.test(imageUrl)) validationErrors.push('Please enter a valid Image URL')
    setErrors(validationErrors)

    if (validationErrors.length === 0) {
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
  }


  const submitSearch = async (e) => {
    e.preventDefault()

    const input = { query }
    await dispatch(searchResults(input))
    setQuery('')
    history.push('/search')
  }

  return (
    <div>
      <div className="search-container">
        <img
          src='https://images.unsplash.com/photo-1573006939324-641d31296356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='music'
          className='splash-img'
        />
        <h2 className="banner">Your hub for local artists</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search artists..."
          className="search-bar"
        />
        <button onClick={submitSearch}>Search</button>
      </div>
      <h2 className="text-style">Featured Artists</h2>
      <div className="featured-artists">
        {featuredProfiles?.length > 0 &&
          featuredProfiles?.map(profile => (
            <div key={profile.id} className="single-profile">
              <Link to={`/profiles/${profile.id}`} className="feature-links">
                <div className="profile-info">
                  <p>{profile.name}</p>
                  {profile.rating > 0 &&
                    <p>{`★ ${profile.rating}`}</p>
                  }
                </div>
                <img
                  src={profile.imageUrl}
                  alt='artist headshots'
                  className="profile-img"
                />
              </Link>
            </div>
          )
          )}
      </div>
      <MapContainer />
      <div className="profile-form-container">
        <div className="profile-form">
          <div className="create-profile-errors">
            {errors.length > 0 &&
              errors.map(error => (
                <p key={error}>{error}</p>
              ))
            }
          </div>
          <h2 className="form-text">
            Create an artist profile and
            <span className="emphasis"> start getting booked!</span>
          </h2>
          <form onSubmit={submitNewProfile} className="profile-inputs">
            <div className="col-a">
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
            </div>
            <div className="col-b">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Musical Genre(s)"
                required
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                required
              />
              <button className="profile-button">Create Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainPage
