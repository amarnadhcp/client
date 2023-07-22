import newRequest from "../utils/newRequest";


export async function UserLogin(user){
    try{
        const data = await newRequest.post("auth/login", { ...user })
        return data
    }catch(err){
        return err
    }
}

export const userRegister = (data) => {
  return newRequest.post("auth/register", data, {
    withCredentials: true,
  });
};


export const userRegisterWithGoogle = (data) => {
    return newRequest.post("auth/googleRegister", data, {
      withCredentials: true,
    });
  };


export  const userLoginwithGoogle = (data) => {
    return newRequest.post("/auth/googleLogin", data, {
      withCredentials: true,
    });
  };