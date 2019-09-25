import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | abort-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:abort-route');
    assert.ok(route);
  });
});
