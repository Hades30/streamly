// axios.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/", // Set your base URL here
  timeout: 5000, // Set a timeout (optional)
  headers: {
    "Content-Type": "application/json", // Set default headers
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjU5NjRkZTZhMGE4NDVjYTRkMDNhOTM2NzE2ZjRiZSIsInN1YiI6IjY2MzNjMWM3OTlkNWMzMDEyMzU2ZDI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aTgBazyBeZ-eKHBsYdsHlFZtpvmlluQxs9TCKeqx3ck", // Example: Set authorization header
  },
});

export default axiosInstance;
