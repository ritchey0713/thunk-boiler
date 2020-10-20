import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addCount } from "./redux/actions";

function App({ dispatch, count, addCount }) {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => addCount()}>{count}</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps, { addCount })(App);
