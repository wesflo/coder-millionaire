export const REDUCERS = {
    countdownDecrement: 'countdownDecrement',
    countdownReset: 'countdownReset',
    goToPrevStep: 'goToPrevStep',
    goToNextStep: 'goToNextStep',
};

export const STEP_QUESTION = 'question';
export const STEP_COUNTDOWN = 'countdown';
export const STEP_SOLUTION = 'solution';
export const STEP_DEMO = 'demo';
export const STEP_RESOLUTION = 'resolution';

export const STEPS = [
    STEP_QUESTION,
    STEP_COUNTDOWN,
    STEP_SOLUTION,
    STEP_DEMO,
    STEP_RESOLUTION,
];

export const COUNTDOWN_START_TIME = 30;
