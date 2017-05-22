import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Header from './routes/Header';
import About from './routes/About/About';
import Book from './routes/Book/Book';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound';

//class App extends Component {
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
//   render() {
//     return (
//       <div className="App">
//         Hello
//       </div>
//     );
//   }
// }

export default App;
