const GET_PROFILES = 'profiles/GET_PROFILES'

const getProfiles = (profiles) => ({
  type: GET_PROFILES,
  profiles
})

export const getFeaturedProfiles = () => async (dispatch) => {
  const response = await fetch('/api/profiles/')
  const data = await response.json()
  dispatch(getProfiles(data))
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
    default:
      return state
  }
}

export default profilesReducer
