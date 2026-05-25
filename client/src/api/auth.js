import axios from "axios";

const API_URL = "https://expense-tracker-2m7m.onrender.com/auth";

export const signUpUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);

  return response.data;
};

export const signInUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signin`, userData);

  return response.data;
};
