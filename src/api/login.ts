import { post } from "~/api";

type User = {
  id: string;
  username: string;
  bio: string;
  icon: string;
  created_at: number;
}

type LoginResponse = {
  message: string;
  token: string;
  user: User;
}

export default async function login(username: string, password: string) {
  const data = {
    username, password
  };

  const response = await post("/auth", data);
  return response as LoginResponse;
}
