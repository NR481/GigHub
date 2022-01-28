const GET_COORDINATES = 'maps/GET_COORDINATES'

const getCoordinates = (coordinates) => ({
  type: GET_COORDINATES,
  coordinates
})

export const getProfileCoordinates = () => async (dispatch) => {
  const response = await fetch('/api/maps/')
  const data = await response.json()
  dispatch(getCoordinates(data))
  return data
}

const mapsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_COORDINATES:
      newState = {}
      action.coordinates.coordinates.forEach(coordinate => {
        newState[coordinate.id] = coordinate
      })
      return newState
    default:
      return state
  }
}

export default mapsReducer
