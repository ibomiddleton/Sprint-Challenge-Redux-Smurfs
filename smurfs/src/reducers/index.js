import { 
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions';

const initialState = {
    fetchingSmurfs: false,
    smurfs: [],
    error: ''
};


export const reducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: action.payload };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false, 
        error: action.payload };
    case FETCH_SMURF_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

//  Your initial/default state for this project could *Although does not have to* look a lot like this
//  {
//    smurfs: [],
  //  fetchingSmurfs: false,
  //  addingSmurf: false,
  //  updatingSmurf: false,
  //  deletingSmurf: false,
  //  error: null
//  }
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
