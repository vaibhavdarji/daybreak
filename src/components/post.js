import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions";

import User from './user';
import Comments from './comments';

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;
    if (!post) {
        return <div className="container-fluid"><h1>Error: 404</h1></div>
    }

    return (
      <div className="container-fluid">
        <div className="card">
            <div className="card-block">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <User userId={post.userId}/>
                <Comments postId={post.id}/>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(Post);
