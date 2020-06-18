
var fetch = require("isomorphic-unfetch")

function request(url, options) {
    let config = {
        ...options
    };
    return fetch(url, config).then(result => {
        if (result) {
            return result.json()
        }
        throw new Error(r);
    });
}

function configurations(url, options) {



    return request(url, options);

}

function orders(url, options) {


    return request(url, options);

}

module.exports = { configurations, orders };


