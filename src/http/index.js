import axios from 'axios';

async function axiosRequest(url, method, data) {
  const response = await axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response;
}

export default axiosRequest;
