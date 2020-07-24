import React, { Component } from 'react';
import { connect } from 'react-redux';

class BarrelAdmin extends Component {
    state = {
        host: '',
        street: '',
        city: '',
        zipcode: '',
        directions: '',
        hours: '',
        status: ''
    }
    addBarrel = (event) => {
        event.preventDefault()
        this.props.dispatch({ type: 'ADD_TO_LIST', payload: this.state });
        // alert('added!')
    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                {<input type="submit" onClick={this.populateInputs} />}
                <form onSubmit={this.addBarrel}>
                    <br />
                    <label for="name"> Name:</label><br />
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInput} /><br />

                    <label for="Street">Street:</label><br />
                    <input name="Street" type="text" value={this.state.street} onChange={this.handleInput} /><br />


                    <label for="City">City:</label><br />
                    <input name="City" type="text" value={this.state.city} onChange={this.handleInput} /><br />

                    <label for="Zipcode">Zipcode:</label><br />
                    <input name="Zipcode" type="text" value={this.state.zipcode} onChange={this.handleInput} /><br />

                    <label for="Directions">Directions:</label><br />
                    <input name="Directions" type="text" value={this.state.directions} onChange={this.handleInput} /><br />

                    <label for="hours">hours:</label><br />
                    <input name="hours" type="text" value={this.state.hours} onChange={this.handleInput} /><br />

                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(BarrelAdmin);