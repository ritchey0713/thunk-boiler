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
  render() {
    return (
      <div className="App">
        POSTS
        <NewPost />
        {Object.keys(this.props.posts).map((id) => (
          <div>{this.props.posts[id].title}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.posts);
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { startSetPosts })(App);

// {this.props.posts.map((post) => (
//   <div key={post.id}>{post.title}</div>
// ))}
