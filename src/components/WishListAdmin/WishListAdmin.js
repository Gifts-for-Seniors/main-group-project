import React, { Component } from "react";
import { connect } from "react-redux";

class WishListAdmin extends Component {
    updatePriority = (item) => {
        console.log(item);
        let data = {
            id: item.id,
            priority: item.priority,
        };
        this.props.dispatch({
            type: "UPDATE_PRIORITY",
            payload: data,
        });
    };
    deleteFavorite = (id) => {
        this.props.dispatch({
            type: 'DELETE_ITEM', payload: id,
        })
        console.log('payload', id)
    }


    render() {
        return (
            <div>
                <h1>Admin WishList</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Edit</th>
                            <th>Select High Priority</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* Mapping through our item reducer to display items marked as high priority */}
                    {this.props.state.list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.item}</td>
                                <td>
                                    <button value={item.id}>Edit</button>
                                </td>
                                <td>
                                    <input
                                        onChange={() => {
                                            this.updatePriority(item);
                                        }}
                                        type="checkbox"
                                        value="true"
                                    />
                                </td>
                                <td>
                                    <td><button onClick={() => this.deleteItem(item.id)}>Delete</button></td>
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <br></br>
                <br></br>

                <h2>Insert new item</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Select High Priority</th>
                            <th>Save Item</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"></input>
                            </td>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>
                                <button>Save New Item</button>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    state,
});

export default connect(mapStateToProps)(WishListAdmin);
