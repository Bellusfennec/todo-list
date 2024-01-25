import { TodoCreate, TodoUpdate } from "../types";
import httpService from "./httpService";

const todoEndPoint = "todo/";

const todoService = {
  get: async () => {
    const { data } = await httpService.get(todoEndPoint);
    return data;
  },
  create: async (payload: TodoCreate) => {
    const { data } = await httpService.post(todoEndPoint, payload);
    return data;
  },
  update: async (payload: TodoUpdate) => {
    const { data } = await httpService.patch(todoEndPoint + payload._id, payload);
    return data;
  },
  delete: async (id: string) => {
    const { data } = await httpService.delete(todoEndPoint + id);
    return data;
  }
};

export default todoService;
