import axios from 'axios'
const http = {}
http.install = function (Vue) {
  axios.defaults.baseURL =
    "http://localhost:8888/api/private/v1/"
  Vue.prototype.axios = axios;
}
export default http
