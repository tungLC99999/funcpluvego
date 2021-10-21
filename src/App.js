import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import MesAlertes from './Pages/MesAlertes';
import MesAssets  from './Pages/MesAssets';
import MesContacts from './Pages/MesContacts';
import Profil from './Pages/Profil';
import Login from './Pages/Login';
function App() {

  return (
    <>
     <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={MesAlertes} />
          <Route path='/asset' component={MesAssets} />
          <Route path='/contact' component={MesContacts} />
          <Route path='/Profil' component={Profil} />
          <Route path='/Login' component={Login} />
      </Switch>
     </Router>
   
    </>
  );
}

export default App;
