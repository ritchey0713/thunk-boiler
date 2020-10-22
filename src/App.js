import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import NewPost from "./newPost";
import { startSetPosts } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.startSetPosts();
  }
  // const [count, setCount] = useState(0);
  debugger;
  render() {
    return (
      <div className="App">
        POSTS
        {this.props.posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
        <NewPost />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { startSetPosts })(App);
