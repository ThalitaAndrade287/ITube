import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    const store = createStore(
        reducers(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    )
    return store
}
