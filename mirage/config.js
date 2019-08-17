import createGraphQLHandler from 'ember-cli-mirage-graphql/handler';
import env from 'demo/config/environment';
import schema from 'demo/graphql/schema';

export default function() {
  this.post(env.apollo.apiURL, createGraphQLHandler(schema, {
    mutations: {
      updateUser: (users, { id, userAttributes }) =>
        users.update(id, userAttributes)
    }
  }));
}
