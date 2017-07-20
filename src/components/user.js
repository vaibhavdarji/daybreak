import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {  fetchUserDetail } from "../actions";

class User extends Component {
    constructor (props) {
        super(props);
        this.handleUrl = this.handleUrl.bind(this);
    }
    componentWillMount() {
      this.props.fetchUserDetail(this.props.userId);
    }

    render () {
        const { user } = this.props;
        if (!user) return <div></div>;
        return (
            <div className="container-fluid">
                <h3>User</h3>
                <div className="card">
                    <div className="card-block">
                        Name: <h4 className="card-title">{user.name}</h4>
                        Email: <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>

                        Address:
                        <p className="card-text">
                            {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}
                        </p>

                        Phone: <p className="card-text mb-2 text-muted">{user.phone}</p>

                        Website:<Link to={user.website} target="_blank" onClick={this.handleUrl}>{user.website}</Link>
                    </div>
                </div>
            </div>
        );
    }

    handleUrl (event) {
        event.nativeEvent.preventDefault();
        window.open(`http://www.${this.props.user.website}`);
    }
}

function mapStateToProps({ user }, ownProps) {
  return { user: user[ownProps.userId]};
}

export default connect(mapStateToProps, { fetchUserDetail })(User);
