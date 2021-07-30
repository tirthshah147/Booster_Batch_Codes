import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  searchField : '',
  // users:[]
}


export const searchRobots = (state=initialState,action={}) => {
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

