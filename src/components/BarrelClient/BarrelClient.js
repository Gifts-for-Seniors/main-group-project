import React, { Component } from 'react';
import { connect } from 'react-redux';

class BarrelClient extends Component {

    render() {
        return (
            <div>
                <p>Covid 19 Notice: Please click here to deliver gift donations at our operations center in Minneapolis. Individual appointments are socially distanced and honor CDC guidelines. Other drop locations below! You may also browse our Wish List for gift ideas.
                </p>


                <ul>
                    <div>
                        {/* {this.props.state.newBarrelReducer.map(barrel => {
                            <li>barrel.hosts</li> 
                        })} */}
                    </div>
                </ul>







            </div>


        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(BarrelClient);