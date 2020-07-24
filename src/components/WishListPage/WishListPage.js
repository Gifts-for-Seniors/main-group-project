import React, { Component } from 'react';
import { connect } from 'react-redux';

class WishList extends Component {

    goToBarrelPage = () => {
        this.props.history.push('/barrels')
    }

    render() {
        return (
            <div>
                <h1>WishList</h1>

                <div className="highPriorityItems">
                    <h2>High Priority Items</h2>

                    {/* Mapping through our item reducer to display items marked as high priority */}
                    {this.props.state.list.map((item) => {
                        if(item.priority === true){
                            return <ul key={item.id}>{item.item}</ul>
                        }
                    })
                }
                </div>

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
                    <button onClick={this.goToBarrelPage}>Click here for drop-Off locations</button>
                    <button>Click to shop our Amazon wishList</button>
                </div>
                
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(WishList);