import axios from "axios";
const FETCH_SERVICE_URL="http://localhost:9002/bidding/getAllServiceRequest";

class FetchDetailsService {
  fetchAllDetails(fetchDetails){
    console.log(fetchDetails);
    return axios.post(FETCH_SERVICE_URL,fetchDetails);
  }
}
export default new FetchDetailsService();