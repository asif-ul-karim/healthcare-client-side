import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import SingleService from './Pages/Home/SingleService/SingleService';
import Specialists from './Pages/Home/Specialists/Specialists';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>
            <Route exact path="/home"> 
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/services/:key">
              <SingleService></SingleService>
            </Route>
            <Route exact path="/specialists">
              <Specialists></Specialists>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
