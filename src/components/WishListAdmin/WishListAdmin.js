import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishListAdmin extends Component {

    render() {
        return (
            <div>
                <h1>Admin WishList</h1>

               <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Edit</th>
                            <th>High Priority</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* Mapping through our item reducer to display items marked as high priority */}
                    {this.props.state.list.map((item) => {
                       
                            return <tr key={item.id}>
                                        <td>{item.item}</td>
                                        <td><button value={item.id}>Edit</button></td>
                                        <td><input type="checkbox" value="true"/></td>
                                        <td><button value={item.id}>Delete</button></td>
                                    </tr>
                        
                    })}
                </table>


                <table>

                </table>

                

            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(WishListAdmin);