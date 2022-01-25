const GET_QUERY = 'search/GET_QUERY'

const getQuery = (query) => ({
  type: GET_QUERY,
  query
})

export const searchResults = (item) => async (dispatch) => {
  const res = await fetch('/api/search/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  })
  const data = await res.json()
  dispatch(getQuery(data))
  return data
}

const searchReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_QUERY:
      newState = { ...state }
      action.query.profiles.forEach(profile => {
        newState[profile.id] = profile
      })
      return newState;
    default:
      return state;
  }
}

export default searchReducer;
