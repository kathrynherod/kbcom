import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
    icon: computed('route', function() {
        const route = this.get('route');

        switch (route) {
            case 'contact':
                return Ember.Object.create({
                    name: 'keyboard_arrow_right',
                    position: 'right',
                });
            case 'portfolio':
                return Ember.Object.create({
                    name: 'keyboard_arrow_up',
                    position: 'top',
                });
            case 'resume':
                return Ember.Object.create({
                    name: 'keyboard_arrow_left',
                    position: 'left',
                });
            default:
                return Ember.Object.create({
                    name: '',
                    position: '',
                });
        }
    }),
});
