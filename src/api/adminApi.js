import adminRequest from "../utils/AdminRequest"

export  const AdminLogin = async  (data) => {
    console.log('login');
    return adminRequest.post("/login", data, {
      withCredentials: true,
    });
  };