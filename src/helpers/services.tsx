import axios from "axios";
//ip location tracing api
export const getLocation = () => {
  return axios.get(
    "https://ipfind.co/me?auth=6b646144-e941-405c-b539-8f971b902474"
  );
};
