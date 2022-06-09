import axios from "axios";
const RESGISTRATION_SERVICE_URL="http://localhost:9002/users/registerUser";

class RegistrationService {
  saveUserDetails(userDetails){
    console.log(userDetails);
    return axios.post(RESGISTRATION_SERVICE_URL,userDetails);
  }
}
export default new RegistrationService();


