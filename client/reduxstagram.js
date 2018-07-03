import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import SinglePhoto from './components/SinglePhoto';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './Store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={SinglePhoto}>

                </Route>
            </Route>
        </Router>
    </Provider>
)

render (router, document.getElementById('root') ) 