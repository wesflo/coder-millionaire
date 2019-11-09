import './styles.scss';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import store from './store';
import Question from './Page/Question';
import Buzzer from './Page/Buzzer';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path={'/question'} component={Question}/>
                        <Route component={Buzzer}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

