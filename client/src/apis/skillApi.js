import api from "./serverApi";

export const addSkillApi = (skill) => {
  return api.post("/api/skills/", skill);
};

export const getSkillsApi = () => {
  return api.get("/api/skills/");
};

export const deleteSkillApi = (skillId) => {
  return api.delete(`/api/skills/${skillId}`);
};

export const updateSkillApi = (skillId, skill) => {
  return api.put(`/api/skills/${skillId}`, skill);
};
