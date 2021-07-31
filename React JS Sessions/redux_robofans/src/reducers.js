import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const initialState = {
  searchField : '',
  // users:[]
}


export const searchRobots = (state=initialState,action={}) => {
  // console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField:action.payload}
      break;
      // case SET_USERS_INCOMING:
      //   return {...state, users:action.payload}
      //   break;
    default:
      return state
      break;
  }
}


const initialStateRobots = {
  robots : [],
  error:'',
  isPending:false
  // users:[]
}

export const requestRobots = (state=initialStateRobots,action={}) => {
  // console.log(action.type);
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {...state, isPending:true}
      break;
      case REQUEST_ROBOTS_SUCCESS:
        return {...state, isPending:false,robots:action.payload}
        break;
        case REQUEST_ROBOTS_FAILED:
          return {...state, isPending:false,error:action.payload}
          break;
    default:
      return state
      break;
  }
}

// store 

// -> searchRobots = {
//   searchRobots:''
// }

// -> requestRobots = {
//   robots : [],
//   error:'',
//   isPending:false
//   // users:[]
// }



//you can't do this because it makes our whole logic unclear

// export const setUsers = async() => {
//   // console.log(action.type);
//   switch (action.type) {
//     case SET_USERS:
//       await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//       return response.json()
//     })
//     .then(users => {
//       return {...state, robots:users}
//     }).catch()
//       break;
//       // case SET_USERS_INCOMING:
//       //   return {...state, users:action.payload}
//       //   break;
//     default:
//       return state
//       break;
//   }
// }

