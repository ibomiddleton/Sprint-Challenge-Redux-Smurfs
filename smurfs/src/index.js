import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import SmurfsList from './components/SmurfsList';

// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(thunk, logger)
// );
const store = createStore(reducer, applyMiddleware(thunk, logger));
function App() {
    return (
      <div className="App">
        <SmurfsList />
      </div>
    );
  }
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
