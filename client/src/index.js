import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reducer from "./rootReducer";
import socketEvents from "./SocketHandler";

socketEvents();

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(reducer, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
