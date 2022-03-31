import axios from 'axios';

const BASE_URL_SERVICES = "http://localhost:8081/api/supplier";

class SupplierService{
    getAll(){
        return axios.get(BASE_URL_SERVICES);
    }
}

export default  new SupplierService();