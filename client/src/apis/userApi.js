import api from "./serverApi";

export const loginApi = (authData) => {
  return api.post("/api/users/login", authData);
};


