import axios from 'axios';

async function axiosRequest(url, method, data) {
  const response = await axios({
    method,
    url,
    data,
  });
  return response;
}

export default axiosRequest;
