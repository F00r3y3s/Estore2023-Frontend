import axios from "axios";
import React from "react";
axios;

const register = async (userData) => {
  const response = await axios.post("", userData);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
};
