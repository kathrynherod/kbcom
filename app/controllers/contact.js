import Ember from 'ember';

export default Ember.Controller.extend({
    isFormSent: false,
    actions: {
        sendContactForm() {
            let controller = this;
            let email = this.get('model.email');
            let message = this.get('model.message');
            let name = this.get('model.name');

            $.ajax({
                data: {
                    recipient: 'kevin@kevinboucher.com',
                    subject: 'KevinBoucher.com contact email',
                    name: name,
                    email:email,
                    message: message,
                },
                method: 'POST',
                url: 'http://kevinboucher.com/cgi-sys/formmail.pl',
            }).always(function() {
                controller.set('isFormSent', true);
            });
        },
    },
});
