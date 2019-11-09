import {COUNTDOWN_START_TIME, COUNTDOWN_STATES, REDUCERS, STEPS} from './Constants';
import questions from './questions';
import getSiblingInArr from './util/getSiblingInArr';

export default (state = {
    step: STEPS[0],
    question: questions,
    countdown: {
        value: COUNTDOWN_START_TIME,
        state: COUNTDOWN_STATES.waiting
    }
}, action) => {
    let step;

    switch (action.type) {
        case REDUCERS.countdownStart:
            return {
                ...state,
                countdown: {
                    value: COUNTDOWN_START_TIME,
                    state: COUNTDOWN_STATES[0],
                },
            };
        case REDUCERS.countdownEnd:
            return {
                ...state,
                countdown: {
                    value: 0,
                    state: COUNTDOWN_STATES[2],
                },
            };
        case REDUCERS.countdownReset:
            return {
                ...state,
                countdown: {
                    value: COUNTDOWN_START_TIME,
                    state: COUNTDOWN_STATES[0],
                },
            };
        case REDUCERS.countdownDecrement:
            return {
                ...state,
                countdown: {
                    value: state.countdown.value - 1,
                    state: COUNTDOWN_STATES[1],
                },
            };
        case REDUCERS.goToNextStep:
            step = getSiblingInArr(state.step, STEPS) || STEPS[0];

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
