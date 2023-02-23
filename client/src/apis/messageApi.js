import api from "./serverApi";

export const getMessagesApi = () => {
  return api.get("/api/messages/", {
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("userData")).token
      }`,
    },
  });
};

export const updateMessageApi = (messageId, message) => {
  return api.put(`/api/messages/${messageId}`, message);
};
