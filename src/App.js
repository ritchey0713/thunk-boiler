import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import NewPost from "./newPost";
import { startSetPosts } from "./redux/actions";
import { Switch, Route } from "react-router-dom";
import PostContainer from "./container/postContainer";

class App extends Component {
  componentDidMount() {
    this.props.startSetPosts();
  }
  // const [count, setCount] = useState(0);
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/new_post" component={NewPost} />
          <Route path="/posts" component={PostContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { startSetPosts })(App);

// {this.props.posts.map((post) => (
//   <div key={post.id}>{post.title}</div>
// ))}

// {
//   Object.keys(this.props.posts).map((id) => (
//     <div>{this.props.posts[id].title}</div>
//   ));
// }

// return (
//   <div className="App">
//     POSTS
//     <NewPost />
//     {this.props.refIds.map((id) => (
//       <div key={this.props.posts[id]}>{this.props.posts[id].title}</div>
//     ))}
//   </div>
// );
{
  /* <Route
            path="/posts/:id"
            render={(props) => <Post {...props} posts={this.props.posts} />}
          /> */
}
