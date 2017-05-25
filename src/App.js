import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Header from './routes/Header';
import About from './routes/about/About';
import Book from './routes/book/Book';
import Home from './routes/home/Home';
import NotFound from './routes/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/book" component={Book} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
