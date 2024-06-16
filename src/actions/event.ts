import { Event } from "@/lib/definitions";
import axios from "axios";

export async function getAllEvents(query: string) {
  try {
    const response = await fetch(`http://localhost:5000/api/event?eventName=${query}`, {
      cache: "no-store",
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function addEvent(event: Event) {
  try {
    const response = await axios.post("http://localhost:5000/api/event", event);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function deleteEventById(eventId: string) {
  try {
    const response = await axios.delete("http://localhost:5000/api/event/" + eventId);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function updateEventById(eventId: string, event: Event) {
  try {
    const response = await axios.patch("http://localhost:5000/api/event/" + eventId, event);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
