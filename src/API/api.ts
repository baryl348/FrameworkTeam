/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_REST_BaseUrl}`,
  headers: {
    "content-type": "application/json",
  },
});

export const taskUrl = {
  async GetTasks() {
    return (await instance.get(`${process.env.REACT_APP_Url}`)).data;
  },
  async PostTask(text: string) {
    return (await instance.post(`${process.env.REACT_APP_Url}`, { text })).data;
  },
  async DeleteTask(id: number) {
    return (await instance.delete(`${process.env.REACT_APP_Url}/` + id)).data;
  },
  async PathTask(id: number, text: string) {
    return (
      await instance.patch(`${process.env.REACT_APP_Url}/` + id, { text })
    ).data;
  },
};
