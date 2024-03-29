import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { getProfileCoordinates } from "../../store/maps"
import { getFeaturedProfiles, addProfile } from "../../store/profiles"
import { searchResults } from "../../store/search"
import { FileUploader } from "react-drag-drop-files"
import MapContainer from "../Map"
import githubLogo from "../../assets/github-logo.png"
import linkedinLogo from "../../assets/linkedin-logo.png"
import defaultImg from "../../assets/music-notes.jpeg"
import checkMark from "../../assets/checkmark.png"
import './MainPage.css'

const MainPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const profilesObj = useSelector(state => state.profiles)
  const user = useSelector(state => state.session.user)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [query, setQuery] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getFeaturedProfiles())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProfileCoordinates())
  }, [dispatch])

  let profiles
  if (profilesObj) {
    profiles = Object.values(profilesObj)
  }

  const featuredProfiles = profiles?.sort((a, b) => b.rating - a.rating)

  const submitNewProfile = async (e) => {
    e.preventDefault()

    const validationErrors = []
    const imgRegex = /\.(gif|jpe?g|png)$/i
    if (!user) validationErrors.push('Please Log in or Sign up to create a profile')
    if (!imgRegex.test(image.name)) validationErrors.push('Please enter a valid Image File')
    if (description.length < 50) validationErrors.push('Description must be at least 50 characters')

    if (validationErrors.length === 0) {
      const newProfile = {
        name,
        description,
        image,
        category,
        location,
        userId: +user?.id
      }
      const data = await dispatch(addProfile(newProfile))
      if (data.error) {
        validationErrors.push(data.error)
      } else {
        return history.push(`/profiles/${data.id}`)
      }
    }
    return setErrors(validationErrors)
  }

  const submitSearch = async (e) => {
    e.preventDefault()

    const input = { query }
    await dispatch(searchResults(input))
    setQuery('')
    history.push('/search')
  }

  const handleKeyPress = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      const input = { query }
      await dispatch(searchResults(input))
      setQuery('')
      history.push('/search')
    }
  }

  const fileTypes = ['jpeg', 'png', 'jpg']

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
          onKeyPress={handleKeyPress}
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
                  onError={(e) => e.target.src = defaultImg}
                />
              </Link>
            </div>
          )
          )}
      </div>
      <MapContainer profiles={profiles} />
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
            <div className="profile-fields">
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
                {/* <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                  id="file-upload"
                  // value={imageUrl}
                  // onChange={(e) => setImageUrl(e.target.value)}
                  // placeholder="Image URL"
                  // required
                /> */}
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
              </div>
            </div>
            <div className="image-button">
              <FileUploader
                handleChange={(file) => setImage(file)}
                types={fileTypes}
                name="file"
                // label="Upload an image or drop your image file here"
                onTypeError={(err) => console.log(err)}
                children={
                  <div className="file-drop">
                    <p>Drag and drop file to upload profile image</p>
                    <p>or</p>
                    <p><u>Browse local files</u></p>
                    {image && (
                      <div className="file-loaded">
                        <p>{image.name}</p>
                        <img src={checkMark} alt="check mark" className="check-mark"/>
                      </div>
                    )}
                    {!image && (
                      <p>No file added</p>
                    )}
                  </div>
                }
              />
              <button className="profile-button">Create Profile</button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className="about-links">
          <h2>GigHub</h2>
          <p>Created by Nick Rogers 2022</p>
          <div className="logos">
            <a href="https://github.com/NR481">
              <img src={githubLogo} alt="github-logo" className="github-logo"/>
            </a>
            <a href="https://www.linkedin.com/in/nick-rogers-635388107/">
              <img src={linkedinLogo} alt="linkin-logo" className="linkedin-logo"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
