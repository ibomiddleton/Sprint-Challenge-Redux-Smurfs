import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';


export const addSmurf = (smurfName) => dispatch => {
  dispatch({
    type: ADD_SMURF,
    payload: smurfName
  });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => this.setState({smurfs: res.data}))
    .catch(err => console.log(err));
}; console.log(axios);

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