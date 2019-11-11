import React from 'react';
import {connect} from 'react-redux';
import {COUNTDOWN_STATES} from '../Constants';
import {action} from '../action';

class Component extends React.Component {

    constructor (props) {
        super(props);

        this.interval = null
    }

    render() {
        const {value, visible} = this.props.countdown;

        return (
            <div
                id="countdown"
                className={`countdown ${visible ? 'show' : 'hide'}`}
            >
                <span>{value}</span>
                <em>sec</em>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            ...state.reducer,
        };
    }
)(Component);
