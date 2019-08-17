import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /users', async function(assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');
  });

  test('it displays a list of users', async function(assert) {
    let [user] = this.server.createList('user', 1);

    await visit('/users');

    assert.dom('li').hasText(`${user.firstName} ${user.lastName}`);
  });
});
