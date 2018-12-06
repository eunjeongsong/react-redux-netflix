import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "reducers"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { App, Movies, Movie } from "components"

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:id" component={Movie} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
