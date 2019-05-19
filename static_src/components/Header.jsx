import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
    static propTypes = {
        countMsg: PropTypes.number
    };

    static defaultProps = {
        countMsg: 0
    };

    render() {
        return (
            <header>
                <div className="msg_counter">{ this.props.countMsg }</div>
            </header>
        )
    }
}