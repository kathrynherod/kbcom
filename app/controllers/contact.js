import Ember from 'ember';
import ENV from '../config/environment';

const mailSubject = 'KevinBoucher.com contact email';

export default Ember.Controller.extend({
    isFormSent: false,
    isHuman: false,
    showCaptchaError: false,
    actions: {
        captchaExpired() {
            this.set('isHuman', false);
        },
        captchaResolved(/* response */) {
            this.set('isHuman', true);
        },
        sendContactForm() {
            let controller = this;
            let email = this.get('model.email');
            let message = this.get('model.message');
            let name = this.get('model.name');

            if (!this.get('isHuman')) {
                this.set('showCaptchaError', true);
                return;
            }

            $.ajax({
                data: {
                    recipient: ENV.contactFormEmail,
                    subject: mailSubject,
                    name: name,
                    email:email,
                    message: message,
                },
                method: 'POST',
                url: ENV.smtpScriptURI,
            }).always(function() {
                controller.set('isFormSent', true);
            });
        },
    },
});
