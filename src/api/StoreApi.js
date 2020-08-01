import axios from "axios";
import ApiHost from "../modules/ApiHost";

class StoreApi {
  static async getList() {
    return await axios.get(ApiHost.getHost() + "api/v1/store");
  }
}

export default StoreApi;
