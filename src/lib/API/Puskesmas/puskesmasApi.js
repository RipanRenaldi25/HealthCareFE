import { toast } from "react-toastify";
import api from "../api";

export const getRequestsByHealthCare = async (filter = {}) => {
  try {
    const response = await api.get(`interventions/requests/healthCare`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: filter,
    });
    return response.data;
  } catch (err) {
    console.log({ err });
    toast.error(err.message);
  }
};

export const getNutritionSummary = async () => {
  try {
    const response = await api.get(
      `interventions/statistics/nutritions/summary`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log({ err });
    toast.error(err.message);
  }
};

export const getRequestSummary = async () => {
  try {
    const response = await api.get(
      `interventions/statistics/requests/summary`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log({ err });
    toast.error(err.message);
  }
};
