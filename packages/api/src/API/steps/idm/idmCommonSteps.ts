import { Given } from '@cucumber/cucumber';
import * as Models from '../../../APIService/identity-service/src/models';
import { DxIdentityService } from '../../../APIService/identity-service/src/dxIdentityService';
import { CustomWorld } from '../common';

const idmContext = "/identity-service";

Given(/^I have identity service available$/, function (this: CustomWorld<DxIdentityService>) {
  const baseUrl = this.customParameters.api + idmContext;
  const options: Models.DxIdentityServiceOptions = { baseUri: baseUrl };
  this.customContext.service = new DxIdentityService(options);
});