import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const Cart = (props) => {

    const totalPrice = props.cart.reduce((total, item) => (total += item.price), 0);

    console.log(props);
    return(
        <React.Fragment>
                <div className="col-md-6 float-left">
                    <h3>Cart Items</h3>
                    <table className="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.cart.map((item, key) => 
                                <tr key={key}>
                                    <th scope="row">{ item.id }</th>
                                    <td>{ item.name }</td>
                                    <td>{ item.price }</td>
                                    <td>
                                        <img width="50px" height="50px"  src={ item.image } />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => props.removeItem(key)}
                                            className="btn btn-danger"
                                            >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                            
                    <h3>Total Price: { totalPrice }</h3>
                </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        removeTest: state.removeTest
    }
}

export default connect(
    mapStateToProps,
    { removeItem }
)(Cart);