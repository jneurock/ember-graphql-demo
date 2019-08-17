import Route from '@ember/routing/route';
import userQuery from 'demo/graphql/queries/user';
import { inject as service } from '@ember/service';

export default Route.extend({
  apollo: service(),

  async model({ user_id }) {
    let { user } = await this.apollo.query({
      query: userQuery,
      variables: { id: user_id }
    });

    return user;
  }
});
