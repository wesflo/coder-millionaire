export default [
    {
        code: `
let foo;
if(0 === foo.length) {
    element.innerHTML = 'Lorem';
} else {
    element.innerHTML = 'Dolor';
}
    `,

        answers: {
            a: 'Lorem',
            b: 'Ipsum',
            c: 'Dolor',
            d: 'Ahmed',
        },

        rightAnswer: 'a'
    },
]


