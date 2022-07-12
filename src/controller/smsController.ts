import Axios from "axios";
import configuration from "../configuration";
import { IMessage } from "../interface/IMessage";

export default function (data: IMessage) {
  return new Promise(function (resolve, reject) {
    try {
      Axios({
        baseURL: configuration.smsAPI,
        data,
        headers: {
          "api-key": configuration.smsAPI_Key,
          contentType: "application/json; charset=utf8",
        },
        method: "POST",
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error?.data.message));
    } catch (error) {
      reject(error);
    }
  });
}
