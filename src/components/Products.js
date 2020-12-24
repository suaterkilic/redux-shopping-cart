import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

const Products = (props) => {
    return(
        <React.Fragment>
            <div className="col-md-6 float-left">
            <h3>Product List</h3>
            <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.bookList.map((book, key) => 
                        <tr key={key}>
                            <th scope="row">{ book.id }</th>
                            <td>{ book.name }</td>
                            <td>{ book.price }</td>
                            <td>
                                <img width="50px" height="50px"  src={ book.image } />
                            </td>
                            <td>
                                <button
                                    onClick={() => props.addToCart(book)}
                                    className="btn btn-primary"
                                    >ADD</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
      bookList: state.bookList,
      cart: state.cart
    }
}

export default connect(
    mapStateToProps,
    { addToCart }
)(Products);