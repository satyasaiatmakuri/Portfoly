import api from "./serverApi";

export const addEducationApi = (education) => {
  return api.post("/api/educations/", education);
};

export const getEducationsApi = () => {
  return api.get("/api/educations/");
};

export const deleteEducationApi = (educationId) => {
  return api.delete(`/api/educations/${educationId}`);
};

export const updateEducationApi = (educationId, education) => {
  return api.put(`/api/educations/${educationId}`, education);
};
