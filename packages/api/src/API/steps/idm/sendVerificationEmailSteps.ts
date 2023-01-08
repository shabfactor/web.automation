import { When, Then } from "@cucumber/cucumber";
import * as Models from '../../../APIService/identity-service/src/models';
import { DxIdentityService } from '../../../APIService/identity-service/src/dxIdentityService';
import { expect } from "chai";
import { CustomWorld } from "../common";

let verifyResponse: Models.SendVerificationResponse;

When(/^I send a verification email to (.*?)$/, async function (this: CustomWorld<DxIdentityService>, emailAddress: string) {
  const idmService: DxIdentityService = this.customContext.service;
  const email: Models.Email = { email: emailAddress };
  const requestOptions: Models.DxIdentityServiceSendVerificationOptionalParams = { body: email };
  verifyResponse = await idmService.sendVerification(requestOptions);
});

Then(/^I get a sending verification email success response$/, function () {
  expect(verifyResponse._response.status).to.equal(200);
});

Then(/^I get a sending verification email bad request response$/, function () {
  expect(verifyResponse._response.status).to.equal(400);
});

Then(/^I get a sending verification email user not existing response$/, function () {
  return true;
});

Then(/^I get a sending verification email format error response$/, function () {
  return true;
});
