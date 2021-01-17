// import initialState from "./initialState";
import * as types from "../constants";

const initialState = {
 allSongs:[]
};
export default function(state = initialState, action) {
  switch (action.type) {

    case types.GET_ALL_SONGS_REQUEST: {
      return {
        ...state,
    
      };
    }
    case types.GET_ALL_SONGS_SUCCESS: {
      return { ...state, allSongs: action.data };
    }
    case types.GET_ALL_SONGS_FAILURE: {
      return { ...state, allSongs: action.data };
    }

    

    default:
      return state;
  }
}
