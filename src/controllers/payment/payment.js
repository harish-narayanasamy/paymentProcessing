const api = require('../../../scalaSDK/index');


const orders = async (req, res) => {
  try {


    if (!req.body.totalAmount || !req.body.currency || !req.body.givenNames || !req.body.surname || !req.body.email || !req.body.redirectConfirmUrl || !req.body.redirectCancelUrl) {
      res.status(400).json({
        msg: 'Please enter all the valid details'
      });
    }



    let result = req.body.redirectConfirmUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (result == null) {
      res.status(400).json({
        msg: 'Invalid redirectConfirmUrl URL'
      });
    }


    let url = process.env.ORDER;
    let headers = {
      "Accept": "application/json",
      "Authorization": "Bearer qhtfs87hjnc12kkos",
      "Content-Type": "application/json"
    };

    let raw = JSON.stringify({
      "totalAmount": { "amount": req.body.totalAmount, "currency": req.body.currency },
      "consumer": { "givenNames": req.body.givenNames, "surname": req.body.surname, "email": req.body.email },
      "merchant": { "redirectConfirmUrl": req.body.redirectConfirmUrl, "redirectCancelUrl": req.body.redirectCancelUrl }
    });

    let options = {
      method: 'POST',
      headers: headers,
      body: raw,
      redirect: 'follow'
    };

    let output = await api.orders(url, options);
    if (!output.token) {
      res.status(parseInt(output.error.status)).json({
        msg: 'Please check the below details',
        details: output
      });
    }
    res.status(200).json(output)
    //
  } catch (error) {
    console.error("error");
    res.status(500).json({
      msg: 'Unable to process,Please Try Again'
    });
  }
};





const configurations = async (req, res) => {
  try {

    let url = process.env.CONFIGURATION;
    let headers = {
      "Accept": "application/json",
      "Authorization": "Bearer qhtfs87hjnc12kkos",
    };

    let options = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };


    let output = await api.configurations(url, options);
    if (!output.type) {
      res.status(parseInt(output.error.status)).json({
        msg: 'Please check the below details',
        details: output
      });
    }
    res.status(200).json(output)
    //
  } catch (error) {
    console.error("error");
    res.status(500).json({
      msg: 'Unable to process,Please Try Again'
    });
  }
};



module.exports = { orders, configurations };

