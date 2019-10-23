import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;

axios.defaults.headers.common["Cache-Control"] = "no-store, no-cache";
axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    alert(error);
  }

  return Promise.reject(error);
});

export function setJwt(jwt){
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
