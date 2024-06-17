import { Users, UsersTable } from "@/lib/definitions";
import axios from "axios";

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function getAllUsers(query: string) {
  try {
    const response = await fetch(`${API_SERVER}/api/users?name=${query}&email=${query}`, {
      cache: "no-store",
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function addUser(user: Users) {
  try {
    const response = await axios.post(`${API_SERVER}/api/register`, user);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteUserById(userId: string) {
  try {
    const response = await axios.delete(`${API_SERVER}/api/users/${userId}`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function updateUserById(userId: string, user: Users) {
  try {
    const response = await axios.patch(`${API_SERVER}/api/users/${userId}`, user);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
