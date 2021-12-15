import axios from "axios";
import * as Constant from "./constant"

export default axios.create({
  baseURL: Constant.BaseApiPath,
  headers: {
    "Content-type": Constant.ContentType,
    "datatype": "json"
  }
});   