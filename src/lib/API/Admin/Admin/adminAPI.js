import api from "../../api";

export const getAllUsers = async (accessToken) => {
  try {
    const response = await api.get(import.meta.env.VITE_API_USERS, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const createUser = async (accessToken, data) => {
  try {
    const response = await api.post(
      import.meta.env.VITE_API_CREATE_USER,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const updateUser = async (accessToken, data, id) => {
  try {
    const response = await api.put(
      import.meta.env.VITE_API_USERS + "/" + id,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};

export const deleteUser = async (accessToken, id) => {
  try {
    const response = await api.delete(
      import.meta.env.VITE_API_USERS + "/" + id,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data;
  }
};
