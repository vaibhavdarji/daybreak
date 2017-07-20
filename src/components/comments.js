import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments, fetchCommentByPostId } from "../actions";

class Comments extends Component {
  componentDidMount() {

      if (this.props.postId) {
          this.props.fetchCommentByPostId(this.props.postId);
      } else {
        this.props.fetchComments();
      }

  }

  renderComments(posts) {
    return _.map(this.props.comments, comment => {
      return (
        <li className="list-group-item" key={comment.id}>
          <Link to={`/comments/${comment.id}`}>
            {comment.name}
          </Link>
        </li>
      );
    });
  }

  render() {
      const { comments, loading, error } = this.props.comments;
      if(loading) {
      return <div className="container-fluid"><h1>Comments</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return (
      <div className="container-fluid">
        <h3>Comments</h3>
        <ul className="list-group">
          {this.renderComments(comments)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, {fetchComments, fetchCommentByPostId})(Comments);
