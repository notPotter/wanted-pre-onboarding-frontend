import axios from 'axios';
import { API_URL } from 'src/constants/constants';
import { UserInfo } from 'src/types/types';

export const requestSignUp = async (signUpInfo: UserInfo) => {
  return await axios.post(`${API_URL}auth/signup`, signUpInfo);
};

export const requestSignIn = async (signInInfo: UserInfo) => {
  return await axios.post(`${API_URL}auth/signin`, signInInfo);
};
