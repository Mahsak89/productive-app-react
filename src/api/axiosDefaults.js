import axios from "axios";

axios.defaults.baseURL = "https://productive-c40034b33280.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;