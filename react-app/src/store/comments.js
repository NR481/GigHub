const GET_COMMENTS = 'comments/GET_COMMENTS'

const getProfileComments = (comments) => ({
  type: GET_COMMENTS,
  comments
})

export const profileComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/profiles/${id}/comments/`)
  const data = await response.json()
  dispatch(getProfileComments(data))
  return data
}

const commentsReducer = (state = {}, action) => {
  let newState
  switch (action.type) {
    case GET_COMMENTS:
      newState = {}
      action.comments.comments.forEach(comment => {
        newState[comment.id] = comment
      })
      return newState
    default:
      return state
  }
}

export default commentsReducer
