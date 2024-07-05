import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export const get = async (endpoint: any) => {
  try {
    const url = `${API}${endpoint}`;
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint: string, data: any) => {
  try {
    const url = `${API}${endpoint}`;
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
