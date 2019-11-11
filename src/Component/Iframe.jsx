import React from 'react';
import {connect} from 'react-redux';
import {COUNTDOWN_STATES, STEP_DEMO, STEPS} from '../Constants';
import {action} from '../action';

class Component extends React.Component {

    constructor (props) {
        super(props);

        this.iframeProps =  {
            sandbox: 'allow-forms allow-scripts allow-same-origin allow-modals allow-popups allow-presentation',
            allow: 'geolocation; microphone; camera;midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb',
        };
    }

    render() {
        const {step, src} = this.props;

        return (
            <iframe title="codeDemo" src={src} className={step === STEP_DEMO ? 'show' : 'hide'} />
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
