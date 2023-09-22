import { API_URL } from "@/constants";
import { fetchClient } from "@/services/fetch";

export const signIn = async () => {
  try {
    const res = await fetchClient.post(API_URL + "/auth/login");
    return res.data;
  } catch (err) {}
};
