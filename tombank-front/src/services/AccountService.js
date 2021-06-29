import axios from "axios";

const API_URL = "http://localhost:8080/account";

class AccountService {
  getUserAccounts() {
    return axios.get(API_URL + "/");
  }

  addNewAccount() {
    return axios.post(API_URL + "/newaccount");
  }
}

export default new AccountService();
