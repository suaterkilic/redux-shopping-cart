import React from 'react';
import data from './data';
import Products from './components/Products';
import Cart from './components/Cart';
import { connect } from 'react-redux';

const App = (props) => {
  return(
    <React.Fragment>
      <div className="container">
          <div className="row mt-5">
              <Products data={data} />
              <Cart />
          </div>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
    return {
      bookList: state.bookList,
      removeTest: state.removeTest
    }
}

export default connect(mapStateToProps)(App);
