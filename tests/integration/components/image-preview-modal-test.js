import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('image-preview-modal', 'Integration | Component | image preview modal', {
    integration: true
});

test('it renders', function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs `{{image-preview-modal}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs `
    {{#image-preview-modal}}
      template block text
    {{/image-preview-modal}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
