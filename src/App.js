import React from 'react';
import './App.css';
import Portfolio from './screens/Portfolio';
import Netflix from './screens/Netflix';
import TPMDetail from './screens/TPMDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Office from './screens/Office';
import OrganizationalLeadership from './screens/OrganizationalLeadership';
import Navbar from './components/Navbar'; // Add this import
import Products from './screens/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar /> {/* Add the Navbar component here */}
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/netflix" component={Netflix} />
          <Route exact path="/tpm" component={TPMDetail} />
          <Route exact path="/office" component={Office} />
          <Route exact path="/organizational_leadership" component={OrganizationalLeadership} />
          <Route exact path="/telmii" component={Products} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

