import axios from 'axios';

const BASE_URL_SERVICES = "http://localhost:8081/app";
class AppService{
    getVersionApp(){
        return axios.get(BASE_URL_SERVICES + "/version");
    }
}
export default new AppService();