import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishList extends Component {

    render() {
        return (
            <div>
                <h1>WishList</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(WishList);