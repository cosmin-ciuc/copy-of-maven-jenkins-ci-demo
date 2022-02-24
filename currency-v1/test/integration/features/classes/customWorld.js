const { World } = require('@cucumber/cucumber');

const Apickli = require('apickli');

var config = require('../../test-config.json');

export default class extends World {
    apickli = null;

    constructor(options) {
        super(options);
    }

    init(scenario) {
        this.apickli = new Apickli.Apickli('https', config.currencyApi.domain + config.currencyApi.basepath);
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    }
}