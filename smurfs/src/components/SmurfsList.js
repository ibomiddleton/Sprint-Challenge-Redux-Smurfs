import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { addSmurf } from '../actions';

// const SmurfsList = (props) => {
//     return (
//     <div>
        // <h2>Name:{props.name}</h2>
        // <strong>Height:{props.height} tall</strong>
        // <p>Age:{props.age} years old</p>
        // {props.smurfs.map (smurf => (
        //     <Smurf smurf={smurf} />
//         ))}
//     </div>    
//     );
// };
class SmurfsList extends React.Component {
    state = {
      newSmurf: ''
    };
  
    addSmurf = e => {
      e.preventDefault();
      this.props.addSmurf(this.state.addSmurf);
    };
  
    handleChanges = e => this.setState({ addSmurf: e.target.value });
  
    render() {
      return (
        <div style={{color: 'dodgerblue', textAlign:'center'}}>
          <h1>Smurf Village</h1>
          <h3>Name: {this.props.name}</h3>
          <h3>Age: {this.props.age}</h3>
          <h3>Height: {this.props.height}</h3>
        <Smurf />

            {/* {this.props.smurfs.map(smurf => (
            <Smurf smurf={smurf}/> 
         ))}  */}
          <form onSubmit={this.addSmurf}>
            <input onChange={this.handleChanges} value={this.state.name} placeholder='name' />
            <input onChange={this.handleChanges} value={this.state.age} placeholder='age' />
            <input onChange={this.handleChanges} value={this.state.height} placeholder='height' />
            <button type="submit" onClick={this.addSmurf}>Add Smurf</button>
          </form>
        </div>
      );
    }
  }

    
const mapStateToProps = state => {
    return {
        name: state.name,
        height: state.height,
        age: state.age
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfsList);
