import http from "@/http-common";

class SupplierService{
    getAll(){
        return http.get("/suppliers")
    }
    get(id) {
        return http.get(`/suppliers/${id}`);
    }
    create(data) {
        return http.post("/suppliers", data);
    }
    delete(id) {
        return http.delete(`/suppliers/${id}`);
    }
}
export default  new SupplierService();