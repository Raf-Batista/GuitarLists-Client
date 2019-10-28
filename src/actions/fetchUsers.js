const URL = 'https://guitar-lists-api.herokuapp.com'

const fetchUsers = () => {
  return dispatch => {
    return fetch(`${URL}/users`)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('users', data)
        dispatch({type: 'ADD_USERS', payload: data})
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default fetchUsers
