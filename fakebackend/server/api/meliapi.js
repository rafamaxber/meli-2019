'use strict';

const SetupEndpoint = require('./setup');

module.exports = SetupEndpoint({
    name: 'meli-api',
    urls: [{
        params: '/items/{id}',
        requests: [{
            method: 'GET',
            response: '/response-files/item.json'
        }]
    },
    {
        params: '/items/{id}/description',
        requests: [{
            method: 'GET',
            response: '/response-files/itemDescription.json'
        }]
    },
    {
        params: '/sites/{siteId}/search',
        requests: [{
            method: 'GET',
            response: '/response-files/search.json'
        }]
    }]
});
