## To-do

- Create page with UI like Page.png
- Connect to Graphql server with sockets. API is located at https://sb-gql-mock-api.herokuapp.com/graphql
- Explore API via grahpiql interface and try to come up with queries and subscriptions you should use to fetch needed data
- Would be awesome if you use React, TypeScript and Graphql client (urql/apollo client etc)
- Listen to odds updates (eg. 1.48 -> 1.55) via sockets (Graphql client)
- Odds should be clickable (log selection data to console on click)
- For desktop UI just have a ligher gray in the background and have the content have a max-width

### Sidenotes

- `events` resolver respond with active events only
- Markets "1x2" expected to be shown on the page
- Your app will work in realtime and there some edge cases must be handled (see Edge Cases)

### Edge Cases

- if some event got update with empty markets inside then this event considered as suspended and other active event should be shown instead
- if some selection got update with `odds = null` then this selection should not be clickable and `-` sign should be rendered instead of number


## Bonus points
- Use typescript OR javascript WITH Prop-Types
- Structured code (archictural)


### Tools

- React
- Typescript
- Graphql
- Graphql subscriptions (sockets)
- Maybe?: NextJs, Redux/Context API/Graphql client cache

Colors:

- rgba(73, 179, 86, 1) - piccolo (green - primary)
- rgba(26, 33, 42, 1) - gohan (dark)
- rgba(35, 42, 51, 1) - goku (dark gray - background)
- rgba(255, 255, 255, 1) - white
- rgba(134, 151, 162, 1) - trunks (gray)

Font: Averta, but feel free to use free: https://fonts.google.com/specimen/Roboto (or https://fonts.google.com/specimen/Inter)

## Glossary

- Event - main entity representing particular sport event
- Competitor - team participating in event
- Market - container of facts user can place a bet on (e.g. 1x2 or Handicap)
- Selection - the fact which might (or might not) happen during the match (or after it finishes). For example 1st team wins or draw.
- Odds - a number indicating multiplier user's bet will be multiplied on if he wins
