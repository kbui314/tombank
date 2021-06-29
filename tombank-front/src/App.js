import { Route, Switch, useHistory } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import axios from "axios";
import SessionStorageService from "./services/SessionStorageService";
import Dashboard from "./components/dashboard/Dashboard";

export default function App() {
  const history = useHistory();
  const sessionStorageService = SessionStorageService.getService();

  axios.interceptors.request.use(
    (config) => {
      const token = sessionStorageService.getToken();
      if (token) {
        config.headers["Authorization"] = "Bearer" + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      sessionStorageService.clearToken();
      history.push("/login");
      Promise.reject(error);
    }
  );

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
