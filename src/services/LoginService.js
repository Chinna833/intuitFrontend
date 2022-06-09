import axios from "axios";
const LOGIN_SERVICE_URL="http://172.20.10.2:9002/users/registerUser";
//localhost
class LoginService {
  profileLogin(loginDetails){
    console.log(loginDetails);
    return axios.post(LOGIN_SERVICE_URL,loginDetails);
  }
}
export default new LoginService();