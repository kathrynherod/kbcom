/* eslint array-callback-return: 0 */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function() {
    this.route('resume');
    this.route('contact');
    this.route('portfolio');
});

export default Router;
