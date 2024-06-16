import { Event } from "@/lib/definitions";
import axios from "axios";

const API_SERVER = process.env.API_SERVER;

export async function getAllEvents(query: string) {
  try {
    const response = await fetch(`${API_SERVER}/api/event?eventName=${query}`, {
      cache: "no-store",
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function addEvent(event: Event) {
  try {
    const response = await axios.post(`${API_SERVER}/api/event`, event);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function deleteEventById(eventId: string) {
  try {
    const response = await axios.delete(`${API_SERVER}/api/event/${eventId}`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function updateEventById(eventId: string, event: Event) {
  try {
    const response = await axios.patch(`${API_SERVER}/api/event/${eventId}`, event);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
