import api from "./serverApi";

export const addProjectApi = (project) => {
  return api.post("/api/projects/", project);
};

export const getProjectsApi = () => {
  return api.get("/api/projects/");
};

export const deleteProjectApi = (projectId) => {
  return api.delete(`/api/projects/${projectId}`);
};

export const updateProjectApi = (projectId, project) => {
  return api.put(`/api/projects/${projectId}`, project);
};
