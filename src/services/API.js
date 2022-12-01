import axios from "axios";
import config from "./config";

const BASE_API = config.BASE_API;

export const submit = async (requestBody) => {
  const requestUrl = `${BASE_API}/register`;
  try {
    const API_RESPONSE = await axios.post(requestUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return API_RESPONSE;
  } catch (error) {
    return error.response;
  }
};

export const preview = async (dataId) => {
  const requestUrl = `${BASE_API}/getPlayerById/${dataId}`;
  try {
    const API_RESPONSE = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return API_RESPONSE;
  } catch (error) {
    return error.response;
  }
};
export const update = async (requestBody, dataId) => {
  const requestUrl = `${BASE_API}/update/${dataId}`;
  try {
    const API_RESPONSE = await axios.post(requestUrl, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return API_RESPONSE;
  } catch (error) {
    return error.response;
  }
};
export const allplayer = async () => {
  const requestUrl = `${BASE_API}/getAllPlayer`;
  try {
    const API_RESPONSE = await axios.get(requestUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return API_RESPONSE;
  } catch (error) {
    return error.response;
  }
};
