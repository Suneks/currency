import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

class App extends React.Component {
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
