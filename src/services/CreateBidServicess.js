import axios from "axios";
const CREATE_BID_SERVICE_URL="http://localhost:9002/bidding/createServiceRequest";
//localhost
class CreateBidService {
  createBidDetails(createBidDetails){
    console.log(createBidDetails);
    return axios.post(CREATE_BID_SERVICE_URL,createBidDetails);
  }
}
export default new CreateBidService();