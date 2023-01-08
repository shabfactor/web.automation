import { expect } from 'chai';
import { When, Then } from '@cucumber/cucumber';
import * as Models from '../../../APIService/identity-service/src/models';
import { DxIdentityService } from '../../../APIService/identity-service/src/dxIdentityService';
import { CustomWorld } from '../common';

let verifyResponse: Models.ValidateEmailResponse;

When(/^I verify a customer email (.*?)$/, async function (this: CustomWorld<DxIdentityService>, emailAddress: string) {
  const idmService: DxIdentityService = this.customContext.service;
  const email: Models.Email = { email: emailAddress };
  const requestOptions: Models.DxIdentityServiceValidateEmailOptionalParams = { body: email };
  verifyResponse = await idmService.validateEmail(requestOptions);
});

Then(/^The verification done successfully$/, function () {
  console.log('-------------- Below Log--------------------');
  console.log('verifyResponse = ' + JSON.stringify(verifyResponse));
  console.log('response status = ' + String(verifyResponse._response.status));
  expect(verifyResponse._response.status).to.equal(200);
});

Then(/^The verification failed with a bad request$/, function () {
  console.log('-------------- Below Log--------------------');
  console.log('verifyResponse = ' + JSON.stringify(verifyResponse));
  console.log('response status = ' + String(verifyResponse._response.status));
  expect(verifyResponse._response.status).to.equal(400);
});

Then(/^I get the validated email not exist response$/, function () {
  return true;
});

Then(/^I get the validated email wrong format response$/, function () {
  return true;
});
