import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header'
import AllMemos from './AllMemos';

import Todo from './Todo';
import Doing from './Doing';
import Done from './Done';
const App =()=>(
    <Router>
        <div>
            <Route path="/" component={Header}/>
            <Route path="/allMemos" component={AllMemos}/>
            <Route path="/allMemos/todo" component={Todo} />
            <Route path="/allMemos/doing" component={Doing} />
            <Route path="/allMemos/done" component={Done} />
        </div>
    </Router>
)
export default connect()(App)