import axios from 'axios';

const BASE_URL_SERVICES = "http://localhost:8081/user";
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

class UserServices{
    get(){
        return axios.get(BASE_URL_SERVICES)
    }
}
export default new UserServices();