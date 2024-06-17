export type Event = {
  event_name: string;
  price: number;
  start_date: Date;
  end_date: Date;
};

export type Ticket = {
  email: string;
  name: string;
  total_ticket: number;
  proof_of_payment?: File | null;
  eventId: string;
};

export type EventsTable = {
  id: string;
  event_name: string;
  price: number;
  start_date: string;
  end_date: string;
};

export type TicketsTable = {
  id: string;
  name: string;
  email: string;
  proof_of_payment: string;
  status: string;
  total_ticket: number;
  token: string;
  eventId: string;
};
