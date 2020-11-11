import React, { Component } from "react";
import { connect } from "react-redux";
import { startAddPost } from "./redux/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.startAddPost(this.state);
    this.setState({
      title: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />

          <button type="submit"> Create Post </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { startAddPost })(PostForm);

// 1. run a fetch (async to db/api)
// 2. get some resp back
// 3. do something with resp, (vanilla js: we created a new obj in the class, in react we use thunk to send it to the reducer)
// 4. rerender/ nav to wherever we want
