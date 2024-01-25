import { UserUpdate } from "../types";
import httpService from "./httpService";

const userEndPoint = "user/";

const userService = {
  getById: async (id: string) => {
    const { data } = await httpService.get(userEndPoint + id);
    return data;
  },
  update: async (payload: UserUpdate) => {
    const { data } = await httpService.post(userEndPoint + payload._id, payload);
    return data;
  }
};

export default userService;
