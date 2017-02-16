import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
    title: 'Contact | Kevin Boucher',

    /**
        Reset contact form on exit
     */
    deactivate() {
        this.controller.setProperties({
            isFormSent: false,
            isHuman: false,
            showCaptchaError: false,
        });
    },
    model() {
        return this.get('store').createRecord('contact-form');
    },
    setupController(controller , model) {
        controller.set('model', model);
    },
});
