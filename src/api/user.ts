import axios from "axios";

const axiosConfig = {
  baseURL: "http://localhost:3001"
};

export type UserInfo = {
  id?: number;
  firstName: string;
  lastName: string;
  gender: "Male" | "Female";
  province: string;
  city: string;
  grade: string;
  skill: string;
};

export const getAllUsersInfo = () => {
  return axios.get<UserInfo[]>("/users", axiosConfig);
};

export const getUserInfoById = (id: number) => {
  return axios.get<UserInfo>(`/users/${id}`, axiosConfig);
};

export const addUser = (user: UserInfo) => {
  return axios.post<UserInfo>("/users", user, axiosConfig);
};
