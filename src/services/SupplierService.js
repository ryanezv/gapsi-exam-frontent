import http from "@/services/HttpAxios";

class SupplierService{
    getAll(){
        return http.get("/suppliers")
    }
    get(id) {
        return http.get(`/suppliers/${id}`);
    }
    create(data) {
        return http.post("/supplier", data);
    }
    delete(id) {
        return http.delete(`/suppliers/${id}`);
    }
}
export default  new SupplierService();
