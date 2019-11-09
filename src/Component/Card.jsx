import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.baseQuestion = 'Which of this will happen when the code is running?';

    }

    getAnswers(question) {
        const answers = [];

        for (const key in question.answers) {
            const className = this.props.step === 3 && question.rightAnswer === key ? 'highlight' : '';

            answers.push(
                <li key={key} className={className} dangerouslySetInnerHTML={{__html: question.answers[key]}}/>
            );
        }

        return answers;
    }

    render() {
        const {question} = this.props;

        return (
            <div className="card">
                <div className={`card-code ${this.props.step > 0 ? 'open' : ''}`}>
                    <SyntaxHighlighter language="javascript" style={darcula}>
                        {question.code}
                    </SyntaxHighlighter>
                </div>
                <div className="card-body">
                    <div className={'question'}
                         dangerouslySetInnerHTML={{__html: question.question || this.baseQuestion}}/>
                    <ul className="answers">
                        {this.getAnswers(question)}
                    </ul>
                </div>
            </div>
        );
    }
}
