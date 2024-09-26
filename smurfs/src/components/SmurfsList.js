import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import { getSmurf } from '../actions';


class SmurfsList extends React.Component {
    state = {
      name: '',
      age: '',
      height: ''
    };
  
    getSmurf = e => {
      e.preventDefault();
      this.props.getSmurf();
    };
  
    handleChanges = e => this.setState({ getSmurf: e.target.name });
  
    render() {
      return (
        <div style={{color: 'dodgerblue', textAlign:'center'}}>
          <h1>Smurf Village</h1>
            {/* {this.props.smurfs.map(smurf => (
              <Smurf smurf={smurf}/> 
            ))}  */}
            <input onChange={this.handleChanges} value={this.state.smurf} placeholder='Dont type here' />
            <button type="submit" onClick={this.addSmurf}>Add Smurf</button>
        </div>
      );
    }
  }

    
const mapStateToProps = state => { 
    console.log(state);
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps, { getSmurf })(SmurfsList);
