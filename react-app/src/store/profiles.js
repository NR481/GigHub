const GET_PROFILES = 'profiles/GET_PROFILES'
const ADD_PROFILE = 'profiles/ADD_PROFILES'
const ALL_PROFILES = 'profiles/ALL_PROFILES'

const getProfiles = (profiles) => ({
  type: GET_PROFILES,
  profiles
})

const createProfile = (profile) => ({
  type: ADD_PROFILE,
  profile
})

// const getAllProfiles = (profiles) => ({
//   type: ALL_PROFILES,
//   profiles
// })

export const getFeaturedProfiles = () => async (dispatch) => {
  const response = await fetch('/api/profiles/')
  const data = await response.json()
  dispatch(getProfiles(data))
  return data
}

// export const getEveryProfile = () => async (dispatch) => {
//   const response = await fetch('/api/prof')
// }

export const addProfile = (profile) => async (dispatch) => {
  const response = await fetch('/api/profiles/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profile)
  })
  const data = await response.json()
  dispatch(createProfile(data))
  return data
}

const profilesReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_PROFILES:
      newState = { ...state}
      action.profiles.profiles.forEach(profile => {
        newState[profile.id] = profile
      })
      return newState
    case ADD_PROFILE:
      newState = { ...state,
        [action.profile.id]: action.profile
      }
      return newState
    default:
      return state
  }
}

export default profilesReducer
