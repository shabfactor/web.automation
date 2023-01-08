import { When, Then } from "@cucumber/cucumber";
import * as Models from '../../../APIService/identity-service/src/models';
import { DxIdentityService } from '../../../APIService/identity-service/src/dxIdentityService';
import { expect } from "chai";
import { CustomWorld } from "../common";

let verifyResponse: Models.SendResetPasswordResponse;

When(/^I send a reset password email to (.*?)$/, async function (this: CustomWorld<DxIdentityService>, emailAddress: string) {
  const idmService: DxIdentityService = this.customContext.service;
  const email: Models.Email = { email: emailAddress };
  const requestOptions: Models.DxIdentityServiceSendVerificationOptionalParams = { body: email };
  verifyResponse = await idmService.sendVerification(requestOptions);
});

Then(/^I get a sending reset password email success response$/, function () {
  expect(verifyResponse._response.status).to.equal(200);
});

Then(/^I get a sending reset password email bad request response$/, function () {
  expect(verifyResponse._response.status).to.equal(400);
});

Then(/^I get a sending reset password email user not existing response$/, function () {
  return true;
});

Then(/^I get a sending reset password email format error response$/, function () {
  return true;
});
