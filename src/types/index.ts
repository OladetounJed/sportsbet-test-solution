export interface GraphQLRequest {
    query: string
    variables?: Record<string, any>
  }

export interface EventProp {
  eventId: string;
}

export interface Category {
  slug: string;
  name?: any;
  id: string;
}

export interface Competitor {
  name: string;
  score: number;
  id: string;
}

export interface Selection {
  id: string;
  name: string;
  odds?: number;
}

export interface Market {
  name: string;
  selections: Selection[];
  id: string;
}

export interface Event {
  id: string;
  category: Category;
  competitors: Competitor[];
  markets: Market[];
  startTime: string;
  updatedAt: string;
}

export interface Events {
  events: Event[];
}

export interface EventsData {
    data: Events;
  }

export interface Competitors {
    competitors: Competitor[];
  }

export interface ActiveEvent {
  competitors: Competitor[];
  market: Market;
  event: Event;
}

export interface ActiveEvents {
    activeEvents: Event[];
  }

  export interface SuspendedEvents {
    suspendedEvents: Event[];
  }


  


