import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <PrivateRoute exact path="/colors" component={BubblePage} />
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
    );
}

export default App;