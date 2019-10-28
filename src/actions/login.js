const URL = 'https://guitar-lists-api.herokuapp.com'

const login = (currentUser) => {
  return dispatch => {
    return fetch(`${URL}/login`, {
      method: 'POST',
      body: JSON.stringify(currentUser),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      if(data.token){
        dispatch({type: 'LOGIN', payload: data})
      } else {
        return alert('invalid credentials')
      }

    })
    .catch(error => console.log(error))
  }
}

export default login
