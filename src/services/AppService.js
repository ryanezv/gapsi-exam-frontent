import http from "@/http-common";

class AppService{
    getVersionApp(){
        return http.get("/app/version")
    }
}
export default new AppService();