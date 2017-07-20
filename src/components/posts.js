import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";

class Posts extends Component {
  componentDidMount() {
      this.props.fetchPosts();

  }

  renderPosts(posts) {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
      const { posts, loading, error } = this.props.posts;
      if(loading) {
      return <div className="container-fluid"><h1>Posts</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return (
      <div className="container-fluid">
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts(posts)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
