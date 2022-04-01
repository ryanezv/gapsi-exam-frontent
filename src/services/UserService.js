import http from "@/services/HttpAxios";;

class UserService{
    get(){
        return http.get("/user")
    }
}
export default new UserService();
