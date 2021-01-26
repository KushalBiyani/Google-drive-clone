import './App.css';
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import AddDetails from './components/AddDetails';

function App() {
  return (
    <div className="App">
    <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/addDetails" component={AddDetails} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
