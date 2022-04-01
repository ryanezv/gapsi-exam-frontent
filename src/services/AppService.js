import http from "@/services/HttpAxios";

class AppService{
    getVersionApp(){
        return http.get("/app/version")
    }
}
export default new AppService();
