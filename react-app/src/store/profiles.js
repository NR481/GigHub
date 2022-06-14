const GET_PROFILES = 'profiles/GET_PROFILES'
const ADD_PROFILE = 'profiles/ADD_PROFILES'
const EDIT_PROFILE = 'profiles/EDIT_PROFILE'
const DELETE_PROFILE = 'profiles/DELETE_PROFILES'

const getProfiles = (profiles) => ({
  type: GET_PROFILES,
  profiles
})

const createProfile = (profile) => ({
  type: ADD_PROFILE,
  profile
})

const editProfile = (profile) => ({
  type: EDIT_PROFILE,
  profile
})

const deleteProfile = (id) => ({
  type: DELETE_PROFILE,
  id
})



export const getFeaturedProfiles = () => async (dispatch) => {
  const response = await fetch('/api/profiles/')
  const data = await response.json()
  dispatch(getProfiles(data))
  return data
}

export const addProfile = (profile) => async (dispatch) => {
  const { name, description, image, category, location, userId } = profile
  const form = new FormData()
  form.append("name", name)
  form.append("description", description)
  form.append("category", category)
  form.append("location", location)
  form.append("userId", userId)

  if (image) form.append("image", image)

  const response = await fetch('/api/profiles/', {
    method: 'POST',
    body: form
  })

  const data = await response.json()
  if (response.ok) {
    dispatch(createProfile(data))
  }
  return data
}

export const modifyProfile = (profile, id) => async (dispatch) => {
  const response = await fetch(`/api/profiles/${id}/`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  })
  const data = await response.json()
  if (response.ok) {
    dispatch(editProfile(data))
  }
  return data
}

export const removeProfile = (id) => async (dispatch) => {
  const response = await fetch(`/api/profiles/${id}/`, {
    method: 'DELETE'
  })
  if (response.ok) dispatch(deleteProfile(id))
}

const profilesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PROFILES:
      newState = { ...state }
      action.profiles.profiles.forEach(profile => {
        newState[profile.id] = profile
      })
      return newState
    case ADD_PROFILE:
      newState = { ...state,
        [action.profile.id]: action.profile
      }
      return newState
    case EDIT_PROFILE:
      newState = { ...state }
      newState[action.profile.id] = action.profile
      return newState
    case DELETE_PROFILE:
      newState = { ...state }
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default profilesReducer
