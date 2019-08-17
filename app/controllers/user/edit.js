import Controller from '@ember/controller';
import updateUserMutation from 'demo/graphql/mutations/update-user';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';

export default Controller.extend({
  apollo: service(),

  firstName: oneWay('model.firstName'),
  lastName: oneWay('model.lastName'),

  actions: {
    async updateUser() {
      let { updateUser } = await this.apollo.mutate({
        mutation: updateUserMutation,
        variables: {
          id: this.model.id,
          attrs: {
            firstName: this.firstName,
            lastName: this.lastName
          }
        }
      });

      this.transitionToRoute('user', updateUser);
    }
  }
});
