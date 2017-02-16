/**
    Provides UI for image thumbnails and preview modals.

    @module ImagePreviewModalComponent
 */

import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
    attributeBindings: ['href', 'title', 'data-target'],
    classNames: ['image-preview'],
    href: computed('imageId', function() {
        return '#' + this.get('imageId');
    }),
    tagName: 'a',
    title: computed.alias('alt'),

    didInsertElement() {
        this._super(...arguments);

        let imageId = this.get('imageId');

        // Append modal to BODY
        if (imageId) {
            $('body').append(`
                <div id="` + imageId + `" class="modal image-preview-modal">
                    <div class="modal-content">
                        <img
                                class="responsive-image"
                                src="` + this.get('src') + `"
                                alt="` + this.get('alt') + `">
                    </div>
                </div>`);
        }

    },

    click(e) {
        let $modal = $(this.get('href'));

        $modal.modal();

        e.preventDefault();
    },
});
