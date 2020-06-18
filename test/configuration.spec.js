var configurations = require('../scalaSDK/index');

describe('Configuration', function () {

    it('getConfiguration', async () => {

        const output = {
            type: "PAY_BY_INSTALLMENT",
            description: "'Pay over time'",
            minimumAmount: {
                "amount": "5.00",
                "currency": "EUR"
            },
            maximumAmount: {
                "amount": "600.00",
                "currency": "EUR"
            },
            numberOfPayments: "3",
            promotionUrl: "https://promotion.scalapay.it/popup/600/",
            locales: [
                "en",
                "fr",
                "it"
            ]
        };
        let url = "https://staging.api.scalapay.com/v2/configurations";
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer qhtfs87hjnc12kkos",
        };

        let options = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };


        let op = await configurations(url, options);
        expect.assertions(1);
        expect(op).toEqual(output);
    });

});