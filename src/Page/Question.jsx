import React from 'react';
import CardComponent from '../Component/Card';
import Countdown from '../Component/Countdown';
import Iframe from '../Component/Iframe';
import questions from '../questions';
import {action} from '../action';
import {STEP_COUNTDOWN, STEP_DEMO, STEP_QUESTION, STEP_RESOLUTION, STEP_SOLUTION, STEPS} from '../Constants';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.maxSteps = 3;
        this.maxQuestionIndex = 0;
        this.interval = null;        this.defaultCountdown = 30;

        this.defaultIframeSource = '/iframe.html?run=';

        this.state = {
            iframeSource: this.defaultIframeSource,
        };
        this.initEvents();
    }

    updateStepByKeyboard = e => {
        const {dispatch} = this.props;

        switch (e.keyCode) {
            case 32:
            case 39:
                e.preventDefault();
                dispatch(action.goToNextStep());
                break;
            case 37:
                dispatch(action.goToPrevStep());
                break;
            default:
                return;
        }
    };

    componentDidUpdate(props, state) {
        const {dispatch} = this.props;
        switch(props.step) {
            case STEP_QUESTION:
                dispatch(action.countdownReset());
                break;
            case STEP_COUNTDOWN:
                this.processCountdown();
                break;
            case STEP_SOLUTION:
                break;
            case STEP_DEMO:
                this.processDemo();
                break;
            case STEP_RESOLUTION:
                this.setState({iframeSource: this.defaultIframeSource});
                dispatch(action.countdownReset());
                break;
        }
    }

    processDemo() {
        const {question} = this.props;
        let {iframeSource} = this.state;

        if (iframeSource === this.defaultIframeSurce) {
            iframeSource = this.defaultIframeSurce + encodeURIComponent(question.code.replace('  ', ''));
        }

        this.setState({iframeSource});
    }

    processCountdown() {
        const {countdown, dispatch} = this.props;

        if(countdown.value === 0) {
            dispatch(action.countdownEnd());
            clearInterval(interval);
        } else {
            this.interval = setInterval(() => {
                dispatch(action.countdownDecrement());
            }, 1000);
        }
    }

    initEvents() {
        window.addEventListener('keyup', this.updateStepByKeyboard);
        document.addEventListener('iframeDone', e => {
            this.updateStep({
                keyCode: 99999
            });
        });
    }

    render() {
        const {step, questionIndex} = this.state;
        const question = questions[questionIndex];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <div className={`card ${step === 2 ? 'blur' : ''}`}>
                            <CardComponent {...this.state} question={question}/>
                        </div>
                    </div>
                    <div className="col">
                        <Countdown />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <Iframe src={this.state.iframeSource} />
                    </div>
                </div>
            </div>
        );
    }
}


