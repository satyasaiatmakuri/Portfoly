import api from "./serverApi";

export const addExperienceApi = (experience) => {
  return api.post("/api/experiences/", experience);
};

export const getExperiencesApi = () => {
  return api.get("/api/experiences/");
};

export const deleteExperienceApi = (experienceId) => {
  return api.delete(`/api/experiences/${experienceId}`);
};

export const updateExperienceApi = (experienceId, experience) => {
  return api.put(`/api/experiences/${experienceId}`, experience);
};
