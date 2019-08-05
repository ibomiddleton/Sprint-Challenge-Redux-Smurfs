// import {
//     NEW_SMURF,
//     FETCHING_SMURFS_SUCCESS,
//     FETCHING_SMURFS_FAILURE
//   } from "../actions";
  
//   const initialState = {
//     fetching: false,
//     smurfs: [],
//     error: null
//   };
  
//   export const charsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case NEW_SMURF:
//         return { ...state, fetching: true };
//       case FETCHING_SMURFS_FAILURE:
//         return { ...state, fetching: false, error: action.payload };
//       case FETCHING_SMURFS_SUCCESS:
//         console.log(action.payload);
//         return {
//           ...state,
//           smurfs: [...state.smurfs, ...action.payload],
//           fetching: false
//         };
//       default:
//         return state;
//     }
//   };