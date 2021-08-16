import axios from "axios";
//ip location tracing api
export const getLocation = () => {
  return axios.get(
    "https://ipfind.co/me?auth=1455a62c-40fa-450f-8823-fcd54205c5a0"
  );
};
