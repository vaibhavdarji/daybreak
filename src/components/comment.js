import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComment } from "../actions";


class Comment extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchComment(id);
  }

  render() {

    const { comment } = this.props;
    if (!comment) {
        return <div className="container-fluid"><h1>Error: 404</h1></div>
    }
    return (
      <div className="container-fluid">
            <div className="card">
                <div className="card-block">
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            </div>

      </div>
    );
  }
}

function mapStateToProps({ comments }, ownProps) {
  return { comment: comments[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchComment })(Comment);
