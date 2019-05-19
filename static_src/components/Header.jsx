import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

class Header extends React.Component {
    static propTypes = {
        messageList: PropTypes.array.isRequired,
    };

    render() {
        return (<header><div className="msg_counter">{ this.props.messageList.length }</div></header>)
    }
}

const mapStateToProps = ({ messageReducer }) => ({
    messageList: messageReducer.messageList,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);