import '../App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Login from './Auth/Login'


function App() {
  return (
    <>

 

    <Router>
    <Navbar />
      <Switch>

        

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

      </Switch>

      <Footer />
    </Router>

    
     
    </>
  );
}

export default App;
