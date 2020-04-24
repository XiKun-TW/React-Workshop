import axios from 'axios';

const BASE_URL = 'http://localhost:3001/user';

export type UserInfo = {
    id?: number;
    firstName: string;
    lastName: string;
    isMale: boolean;
    skill: string[];
    grade: string;
    province: string;
    city: string;
}

export const addUser = (userInfo: UserInfo) => {
    return axios.post(BASE_URL, userInfo);
}

export const getAllUser = () => {
    return axios.get<UserInfo[]>(BASE_URL);
}