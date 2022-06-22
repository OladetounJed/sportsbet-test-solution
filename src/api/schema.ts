export const EventsQuery = `
query {
    events {
      id
      category {
        slug
        name
        id
      }
      competitors {
        name
        score
        id
      }
      markets {
        name
        selections {
          id
          name
          odds
        }
        id
      }
      startTime
      updatedAt
      
      
    }
  }
`;

export const EventSubscription = `
subscription($eventId: ID!){ 
    eventUpdate(eventId: $eventId) {
      id
        category {
          slug
          name
          id
        }
        competitors {
          name
          score
          id
        }
        markets {
          name
          selections {
            id
            name
            odds
          }
          id
        }
        startTime
        updatedAt    
    }
    }
`;