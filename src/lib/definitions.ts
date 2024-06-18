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

export type Role = {
  role: string;
};
export type UsersTable = {
  id: string;
  name: string;
  email: string;
  roleId: number;
  role: Role;
};
export type Users = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  roleId: string;
};
export type LoginData = {
  email: string;
  password: string;
};
export type Status = {
  pending: number;
  approved: number;
  rejected: number;
};

export type Dashboard = {
  event_name: string;
  status: Status;
  total: number;
};
