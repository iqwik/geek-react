import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import connect from "react-redux/es/connect/connect";
import { loadProfile } from '../actions/apiActions';

class Profile extends React.Component {
    static propTypes = {
        loadProfile: PropTypes.func.isRequired,
        userId: PropTypes.number.isRequired,
        userName: PropTypes.string.isRequired
    };

    componentDidMount(){
        this.props.loadProfile();
    }

    render() {
        const { userId, userName } = this.props;
        return ([
            <h1 key="h1">Profile</h1>,
            <div key="userData">
                <p><b>user id:</b> { userId }</p>
                <p><b>user name:</b> { userName }</p>
            </div>
        ]);
    }
}

const mapStateToProps = ({ profileReducer }) => ({
    userId: profileReducer.userId,
    userName: profileReducer.userName,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);