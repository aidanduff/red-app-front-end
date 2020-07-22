import React, { Component } from 'react';
import ItemDataService from '../service/ItemDataService';

class ListItemComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            message: null
        }
        this.refreshItems = this.refreshItems.bind(this);
        this.updateItemClicked = this.updateItemClicked.bind(this)
        this.deleteItemClicked = this.deleteItemClicked.bind(this)
        this.addItemClicked = this.addItemClicked.bind(this)
    }

    componentDidMount(){
        this.refreshItems();
    }

    refreshItems(){
        // const response = ItemDataService.retrieveAllItems();
        // response.status === 204? this.setState({ items: [] }) : this.setState({ items: response.data });

        ItemDataService.retrieveAllItems()
            .then(
                response => {
                    response.status === 204? this.setState({ items: [] }) : this.setState({ items: response.data });
                }
            )
    }

    updateItemClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/item/${id}`)
    }

    deleteItemClicked(id) {
        ItemDataService.deleteItem(id)
            .then(
                response => {
                    this.setState({ message: `Item ${id} deleted successfully` })
                    this.refreshItems()
                }
            ) 
    }

    addItemClicked() {
        this.props.history.push(`/items/create`)
    }

    render() {
        return (
            <div className="container">
                <h3>All Items</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td data-testid="get-all-table" >{item.name}</td>
                                            <td>{item.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateItemClicked(item.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteItemClicked(item.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            <div className="row">
                <button data-testid="add-button" className="btn btn-success" onClick={this.addItemClicked}>Add</button>
            </div>
            </div>
        )
    }

}

export default ListItemComponent