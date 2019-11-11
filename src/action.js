import {REDUCERS} from './Constants';

const goToNextStep = () => ({ type: REDUCERS.goToNextStep });
const goToPrevStep = () => ({ type: REDUCERS.goToPrevStep });

const countdownDecrement = () => ({ type: REDUCERS.countdownDecrement });
const countdownReset = () => ({ type: REDUCERS.countdownReset });

const runDemo = () => ({ type: REDUCERS.runDemo });


export default {
    goToNextStep,
    goToPrevStep,
    countdownDecrement,
    countdownReset,
    runDemo,
};
