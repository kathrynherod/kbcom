/* global moment */

import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
    currentYear: moment().format('YYYY'),
});
