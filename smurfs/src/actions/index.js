import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';


// export const addSmurf = () => dispatch => {
//   dispatch({
//     type: NEW_SMURF,
//   });
//   axios
//     .get("http://localhost:3333/smurfs")
//     .then(res => this.setState({smurfs: res.data}))
//     .catch(err => console.log(err));
// }; console.log(axios);

export const addSmurf = (smurfName) => {
  console.log(smurfName);
  return {
    type: ADD_SMURF,
    payload: smurfName
  };
};






 //   dispatch({
    //     type: FETCHING_SMURFS_SUCCESS,
    //     payload: data.results
    //   });
    // }) 
    // .catch(err => {
    //   dispatch({
    //     type: FETCHING_SMURFS_FAILURE,
    //     payload: err
    //   });
    // });