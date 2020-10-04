import React from 'react';
import { createClient, Provider } from 'urql';
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import { Route } from 'react-router-dom';
import Header from './components/Header'

const client = createClient({ url: 'http://localhost:4000/graphql' });
const App = () => (
    <Provider value={client}>
      <Route exact path="/" render={() => <Header />} />
      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route path="/post" render={() => <div><Header /><p>Окей Гугл!</p></div> } />
    </Provider>
  );

export default App;
