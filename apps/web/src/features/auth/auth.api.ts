import { fetcher } from '@/shared/api/fetcher';

export const login = (dto: {
  email: string;
  password: string;
}) => {
  return fetcher('/auth/login', {
    method: 'POST',
    body: JSON.stringify(dto),
  });
};

export const getMe = () => {
  return fetcher('/auth/me');
};