import axios from "axios";


const instance = axios.create({
    baseURL: 'http://185.213.27.86:5000/api/v1/',
    headers: {'content-type': 'application/json',
    authorization: `012cb34fd5ab49db8cf7445ef011dd3a`}
  });

  export default instance;