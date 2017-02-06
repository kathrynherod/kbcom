import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    model: function() {
        return this.get('store').createRecord('contact-form');
    },
    setupController: function(controller , model ) {
        controller.set('model', model);
    },
});
