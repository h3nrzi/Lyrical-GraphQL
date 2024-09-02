import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/pages/HomePage";
import App from "./components/Layout/App";
import SongCreate from "./components/pages/SongCreatePage";
import SongDetail from "./components/pages/SongDetailPage";

const client = new ApolloClient({
  dataIdFromObject: obj => obj.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
