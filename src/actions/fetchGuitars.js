const URL = 'https://guitar-lists-api.herokuapp.com'

const fetchGuitars = () => {
  return dispatch => {
    return fetch(`${URL}/guitars`)
      .then(response => response.json())
      .then(data => {
      dispatch({type: 'ADD_GUITARS', payload: data})
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default fetchGuitars
