export const REDUCERS = {
    countdownStart: 'countdownStart',
    countdownEnd: 'countdownEnd',
    countdownReset: 'countdownReset',
    countdownDecrement: 'countdownDecrement',
    goToPrevStep: 'goToPrevStep',
    goToNextStep: 'goToNextStep',
    updateStep: 'updateStep',
};

export const STEPS = [
    'question',
    'countdown',
    'solution',
    'demo',
    'resolution'
];

export const COUNTDOWN_START_TIME = 30;

export const COUNTDOWN_STATES = {
    waiting: 'waiting',
    running: 'running',
    done: 'done',
};
