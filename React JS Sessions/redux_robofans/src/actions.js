import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
  type : CHANGE_SEARCH_FIELD,
  payload:text
})

export const requestRobots = () => (dispatch) => {
  dispatch({type:REQUEST_ROBOTS_PENDING })
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
}

// function requestRobots(){
//   return function(dispatch){
//     dispatch({type:REQUEST_ROBOTS_PENDING })
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:data}))
//     .catch(error => dispatch({type:REQUEST_ROBOTS_FAILED,payload:error}))
//   }
// }







// dispatch(fetch()) thunk middleware
// robots:[{},{}]
// action.payload = [{},{,{}}]
// fetch is fetching the data before it fetches the complete data control is passed to reducer
// action.payload = [{},{},{}]


// export const setUsers = (users) => ({
//   type : SET_USERS_INCOMING,
//   payload:users
// })




