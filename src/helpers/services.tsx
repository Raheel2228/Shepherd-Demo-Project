import axios from "axios";

export const getLocation = () => {
  return axios.get(
    "https://ipfind.co/me?auth=dbe817fa-2c28-4e15-be56-40ad7baadcff"
  );
};
