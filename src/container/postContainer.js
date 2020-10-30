import React, { Component } from "react";
import AllPosts from "../AllPosts";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Post from "../Post";

class PostContainer extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}/posts_index`}
          render={(props) => (
            <AllPosts
              {...props}
              posts={this.props.posts}
              refIds={this.props.refIds}
            />
          )}
        />
        <Route
          path={`${this.props.match.path}/show/:id`}
          render={(props) => (
            <Post
              {...props}
              posts={this.props.posts}
              refIds={this.props.refIds}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    posts: state.posts,
    refIds: state.refIds,
  };
};

export default connect(mapStateToProps)(PostContainer);
