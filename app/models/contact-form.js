/**
    Provides data model for contact form.

    @module ContactFormModel
 */

import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr(),
    message: DS.attr(),
    name: DS.attr(),
});
