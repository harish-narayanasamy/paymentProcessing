var orders = require('../scalaSDK/index');

describe('Order', function () {

    it('PostOrder', async () => {

        let url = "https://staging.api.scalapay.com/v2/orders";
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer qhtfs87hjnc12kkos",
            "Content-Type": "application/json"
        };
        let raw = JSON.stringify({
            "totalAmount": { "amount": "100", "currency": "EUR" },
            "consumer": { "givenNames": "harish", "surname": "samy", "email": "harish.nsamy@gmail.com" },
            "merchant": { "redirectConfirmUrl": "https://staging.api.scalapay.com/v2/orders", "redirectCancelUrl": "https://staging.api.scalapay.com/v2/orders" }
        });
        let options = {
            method: 'POST',
            headers: headers,
            body: raw,
            redirect: 'follow'
        };

        let op = await orders(url, options);
        expect.assertions(1);
        expect(op).toEqual(expect.objectContaining({
            token: expect.any(String),
            expires: expect.any(String),
            checkoutUrl: expect.any(String)
        }));
    });

    it('PostOrder2', async () => {

        let url = "https://staging.api.scalapay.com/v2/orders";
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer qhtfs87hjnc12kkos",
            "Content-Type": "application/json"
        };
        let raw = JSON.stringify({
            "totalAmount": { "amount": "1000", "currency": "EUR" },
            "consumer": { "givenNames": "harish", "surname": "samy", "email": "harish.nsamy@gmail.com" },
            "merchant": { "redirectConfirmUrl": "https://staging.api.scalapay.com/v2/orders", "redirectCancelUrl": "https://staging.api.scalapay.com/v2/orders" }
        });
        let options = {
            method: 'POST',
            headers: headers,
            body: raw,
            redirect: 'follow'
        };

        let op = await orders(url, options);
        expect.assertions(1);
        expect(op).toEqual(expect.not.objectContaining({
            token: expect.any(String),
            expires: expect.any(String),
            checkoutUrl: expect.any(String)
        }));
    });



});
