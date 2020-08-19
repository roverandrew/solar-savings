import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = createStore(rootReducer);

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
