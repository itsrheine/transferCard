import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Routes from './pages/Routes'
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Routes from "./pages/Routes";
=======
>>>>>>> develop
import Nav from "./components/Nav";
import Success from "./pages/Success";
import { Provider } from "react-redux";
import store from "./utils/store"
import OrderHistory from "./pages/OrderHistory";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/routes" component={Routes} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/routes" component={Routes} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
