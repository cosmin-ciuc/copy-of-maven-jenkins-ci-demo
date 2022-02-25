/*
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
'use strict';

const apickli = require('apickli');
const { Before, setDefaultTimeout } = require('@cucumber/cucumber');

var config = require('../../test-config.json');

console.log('currency api: [' + config.currencyApi.domain + ', ' + config.currencyApi.basepath + ']');

// cleanup before every scenario
Before(function(scenario, callback) {
    console.log('Before: scenario=' + scenario + ', callback=' + callback);
    this.apickli = new apickli.Apickli('https', config.currencyApi.domain + config.currencyApi.basepath, './test/integration/features/fixtures/');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    callback();
});

setDefaultTimeout(60 * 1000);