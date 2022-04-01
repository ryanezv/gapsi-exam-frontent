import http from "@/http-common";;

class UserServices{
    get(){
        return http.get("/user")
    }
}
export default new UserServices();