export type Event = {
  event_name: string;
  price: number;
  start_date: Date;
  end_date: Date;
};

export type EventsTable = {
  id: string;
  event_name: string;
  price: number;
  start_date: string;
  end_date: string;
};
