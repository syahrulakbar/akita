import { Ticket } from "@/lib/definitions";
import axios from "axios";

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;

export async function uploadImage(image: File) {
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "mrbuy3bg");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      formData,
    );
    return response.data.secure_url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTicketById(ticketId: string) {
  try {
    const response = await fetch(`${API_SERVER}/api/ticket/${ticketId}`, {
      cache: "no-store",
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllTickets(query: string) {
  try {
    const response = await fetch(`${API_SERVER}/api/ticket?name=${query}&token=${query}`, {
      cache: "no-store",
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function addTicket(ticket: Ticket) {
  try {
    let image = "";
    if (ticket.proof_of_payment) {
      image = await uploadImage(ticket.proof_of_payment);
    }
    const updatedTicket = { ...ticket, proof_of_payment: image };

    const response = await axios.post(`${API_SERVER}/api/ticket`, updatedTicket);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTicketById(ticketId: string) {
  try {
    const response = await axios.delete(`${API_SERVER}/api/ticket/${ticketId}`);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function updateTicketById(ticketId: string, ticket: any) {
  try {
    const response = await axios.patch(`${API_SERVER}/api/ticket/${ticketId}`, ticket);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
