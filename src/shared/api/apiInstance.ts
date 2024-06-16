import axios from "axios";

export const $api = axios.create({
  baseURL: "http://109.120.187.242:8099",
});
