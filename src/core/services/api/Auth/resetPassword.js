import http from "../../interceptor"

export  const forgetPasswordAPI = async(user) => { 

    try {
        const response = await http.post("/Sign/ForgetPassword" , user);
        return response
    }
    catch(error) {
        return false
    }

}
export  const resetConfirmValueAPI = async(user) => { 
    

    try {
        const response = await http.get("/Sign/Reset/:ConfigValue" , user);
        return response
    }
    catch(error) {
        return false
    }

}
export  const resetPasswordAPI = async(user) => { 
    

    try {
        const response = await http.post("/Sign/Reset" , user);
        return response
    }
    catch(error) {
        return false
    }

}