import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Component/Card';
import questions from './question';
import './styles.scss';

class RootComponent extends React.Component {

    constructor(props) {
        super(props);

        this.maxSteps = 3;
        this.maxQuestionIndex = 0;
        this.interval = null;
        this.defaultCountdown = 30;
        this.defaultIframeSurce = '/iframe.html?run=';
        this.iframe = React.createRef();

        this.state = {
            countdown: this.defaultCountdown,
            step: 0,
            questionIndex: 0,
            question: questions[0],
            iframeProps: {
                sandbox: 'allow-forms allow-scripts allow-same-origin allow-modals allow-popups allow-presentation',
                allow: 'geolocation; microphone; camera;midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb',
                src: this.defaultIframeSurce,
                ref: this.iframe,
                className: '',
            },
        };
        this.initEvents();
    }

    updateStep = (e) => {
        let {step, questionIndex, question, iframeProps} = this.state;
        let direction = 0;

        if (e.keyCode === 32 || e.keyCode === 39) {
            e.preventDefault();
            direction = 1
        } else {
            if (e.keyCode === 37) {
                direction = -1;
            }
        }

        step += direction;

        if (step < 0) {
            if (questionIndex > 0) {
                questionIndex--;
                step = this.maxSteps;
            } else {
                step = 0;
            }
        } else {
            if (step > this.maxSteps) {
                if (questionIndex < this.maxQuestionIndex) {
                    questionIndex++;
                    step = 0;
                } else {
                    step = this.maxSteps;
                }
            }
        }

        if (step < 2) {
            iframeProps.className = '';
        }
        if (step === 1) {
            this.startCountdown();
        } else {
            clearInterval(this.interval);
        }

        if(questionIndex !== this.state.questionIndex) {
            question = questions[questionIndex];
            iframeProps.src = this.defaultIframeSurce;
        }

        this.setState({step, questionIndex, question, iframeProps, countdown: this.defaultCountdown});
    };

    loadIframe = () => {
        let {iframeProps, question} = this.state;

        iframeProps.className = 'show';

        if(iframeProps.src === this.defaultIframeSurce) {
            iframeProps.src = this.defaultIframeSurce + encodeURIComponent(question.code.replace('  ', ''));
        } else {
            iframeProps.src = this.defaultIframeSurce;
            setTimeout(this.loadIframe, 200);
        }

        this.setState({iframeProps});

    };

    initEvents() {
        window.addEventListener('keyup', this.updateStep);
    }

    countdown = () => {
        let {countdown, step} = this.state;
        countdown--;

        if (countdown <= 0) {
            step++;
            countdown = this.defaultCountdown;
            clearInterval(this.interval);
        }

        this.setState({step, countdown});
    };

    startCountdown() {
        this.interval = setInterval(this.countdown, 1000);
    }

    render() {
        const {step, questionIndex} = this.state;
        const question = questions[questionIndex];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <div className={`card ${step === 2 ? 'blur' : ''}`}>
                            <CardComponent {...this.state} question={question} />
                        </div>
                    </div>
                    <div className="col">
                        <div id="countdown" className={`countdown ${step === 1 ? 'show' : ''}`}>
                            <span>{this.state.countdown}</span>
                            <em>sec</em>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <div className="d-flex justify-content-center mt-5">
                            <button type="button" className={`btn btn-outline-primary ${step >= 2 ? 'show' : ''}`} onClick={this.loadIframe}>Load Script</button>
                        </div>
                        <iframe {...this.state.iframeProps} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<RootComponent/>, document.getElementById('app'));
