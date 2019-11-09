import {REDUCERS} from './Constants';

const goToNextStep = () => ({ type: REDUCERS.goToNextStep });
const goToPrevStep = () => ({ type: REDUCERS.goToPrevStep });

const countdownStart = () => ({ type: REDUCERS.countdownStart });
const countdownEnd = () => ({ type: REDUCERS.countdownEnd });
const countdownReset = () => ({ type: REDUCERS.countdownReset });
const countdownDecrement = () => ({ type: REDUCERS.countdownDecrement });


export default {
    goToNextStep,
    goToPrevStep,
    countdownStart,
    countdownEnd,
    countdownReset,
    countdownDecrement,
};
