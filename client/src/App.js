import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Success from "./pages/Success";

// import Detail from "./pages/Detail";
import Routes from "./pages/Routes";
// import NoMatch from "./pages/NoMatch";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Tickets from "./pages/Store";
import TransferCard from "./pages/MyTransferCard";
import { Provider } from "react-redux";
import store from "./utils/store";
import Footer from "./components/Footer";

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
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/store" component={Tickets} />
              <Route exact path="/routes" component={Routes} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/transfercard" component={TransferCard} />
              <Route component={Home} />
            </Switch>
            <Footer>
              <span class="mainfooter">
                Created by David, Mahmoud, Blue and Rheine
              </span>
            </Footer>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
