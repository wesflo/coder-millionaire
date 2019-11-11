import {COUNTDOWN_START_TIME, REDUCERS, STEPS} from './Constants';
import questions from './questions';
import getSiblingInArr from './util/getSiblingInArr';

export default (state = {
    step: STEPS[0],
    questions: questions,
    question: questions[0],
    countdown: {
        value: COUNTDOWN_START_TIME,
        visible: false,
    }
}, action) => {
    let step;

    switch (action.type) {
        case REDUCERS.countdownDecrement:
            return {
                ...state,
                countdown: {
                    value: state.countdown.value - 1,
                    visible: true,
                },
            };
        case REDUCERS.countdownReset:
            return {
                ...state,
                countdown: {
                    value: COUNTDOWN_START_TIME,
                    visible: false,
                },
            };
        case REDUCERS.goToNextStep:
            step = getSiblingInArr(state.step, STEPS) || STEPS.question;

            return {
                ...state,
                step,
            };
        case REDUCERS.goToPrevStep:
            step = getSiblingInArr(state.step, STEPS, -1) || STEPS[0];

            return {
                ...state,
                step,
            };
    }
    return state;
};
