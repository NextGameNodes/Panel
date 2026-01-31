import { http } from '@/shared/api/http';

export interface LoginDto {
  email: string;
  password: string;
}

export const login = async (dto: LoginDto) => {
  const res = await http.post('/auth/login', dto);
  return res.data;
};

export const getMe = async () => {
  const res = await http.get('/me');
  return res.data;
};