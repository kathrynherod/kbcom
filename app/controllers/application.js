import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
    isHomePage: computed.equal('currentRouteName', 'index'),
});
