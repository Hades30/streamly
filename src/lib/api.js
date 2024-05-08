import axios from "./axios";

async function makeAxiosCall({ url, method, data = {} }) {
  try {
    const response = await axios.request({ url, params: data, method });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export default makeAxiosCall;
