import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {
  loginUser(user) {
    return axios.post(API_URL + "/login", user);
  }

  registerNewUser(newUser) {
    return axios.post(API_URL + "/register", newUser);
  }
}

export default new UserService();
