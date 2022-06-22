import { graphql } from 'msw'

export const handlers = [

  graphql.query('EventQuery', (req, res, ctx) => {


    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: 'John',
        },
      }),
    )
  }),
  ]