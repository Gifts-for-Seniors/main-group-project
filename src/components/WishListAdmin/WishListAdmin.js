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
                                        <td><input type="checkbox"/></td>
                                        <td><button value={item.id}>Delete</button></td>
                                    </tr>
                        
                    })}
                </table>

                <div className="regularPriorityItems">
                    <h2>Other Items</h2>

                    {/* Mapping through our item reducer to display remaining items */}
                    {this.props.state.list.map((item) => {
                        if (item.priority === false) {
                            return <ul key={item.id}>{item.item}</ul>
                        }
                    })
                    }
                </div>

                <div>
                    <button>Click here for drop-Off locations</button>
                    <button>Click to shop our Amazon wishList</button>
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(WishListAdmin);