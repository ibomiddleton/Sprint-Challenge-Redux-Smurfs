import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(({ data }) => {
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SMURF_FAILURE,
        payload: err
      })
    })
};

// export const addSmurf = (smurfName) => {
//   console.log(smurfName);
//   return {
//     type: ADD_SMURF,
//     payload: smurfName
//   };
// };

// addSmurf = event => {
//   event.preventDefault();
//   // add code to create the smurf using the api
//   axios.post('http://localhost:3333/smurfs', {name: this.state.name, age: this.state.age, height: this.state.height} )
//     .then(res => this.props.update(res.data))
//     .catch(err => console.log(err));
    
//     this.setState({
//       name: '',
//       age: '',
//       height: ''
//     });

//   }




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