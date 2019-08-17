import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: i => `First${i}`,
  lastName: i => `Last${i}`
});
