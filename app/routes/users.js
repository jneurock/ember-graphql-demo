import Route from '@ember/routing/route';
import usersQuery from 'demo/graphql/queries/users';
import { inject as service } from '@ember/service';

export default Route.extend({
  apollo: service(),

  model() {
    return this.apollo.query({ query: usersQuery });
  }
});
