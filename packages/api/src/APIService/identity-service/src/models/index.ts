/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing UserDetails.
 */
export interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

/**
 * An interface representing Email.
 */
export interface Email {
  email: string;
  password?: string;
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  code: number;
  description: string;
  method: string;
  path: string;
  service: string;
  status: number;
  timestamp: Date;
}

/**
 * An interface representing ErrorResponse.
 */
export interface ErrorResponse {
  error?: ErrorModel;
}

/**
 * An interface representing PasswordDetails.
 */
export interface PasswordDetails {
  code: string;
  email: string;
  password: string;
  type: any;
}

/**
 * An interface representing ServiceResponse.
 */
export interface ServiceResponse {
  email: string;
  maxAttempts?: number;
  remainingAttempts?: number;
}

/**
 * An interface representing ValidationDetails.
 */
export interface ValidationDetails {
  code: string;
  email: string;
  type: any;
}

/**
 * An interface representing RegistrationDetails.
 */
export interface RegistrationDetails {
  email: string;
  firstName: string;
  lastName: string;
}

/**
 * An interface representing DxIdentityServiceOptions.
 */
export interface DxIdentityServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceRegisterUserOptionalParams extends msRest.RequestOptionsBase {
  body?: UserDetails;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceResetPasswordOptionalParams extends msRest.RequestOptionsBase {
  body?: PasswordDetails;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceSendResetPasswordOptionalParams extends msRest.RequestOptionsBase {
  body?: Email;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceSendVerificationOptionalParams extends msRest.RequestOptionsBase {
  body?: Email;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceSetEmailVerifiedOptionalParams extends msRest.RequestOptionsBase {
  body?: ValidationDetails;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceSilentRegisterUserOptionalParams extends msRest.RequestOptionsBase {
  body?: RegistrationDetails;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceValidateEmailOptionalParams extends msRest.RequestOptionsBase {
  body?: Email;
}

/**
 * Optional Parameters.
 */
export interface DxIdentityServiceValidateCodeOptionalParams extends msRest.RequestOptionsBase {
  body?: ValidationDetails;
}

/**
 * Contains response data for the registerUser operation.
 */
export type RegisterUserResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the resetPassword operation.
 */
export type ResetPasswordResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the sendResetPassword operation.
 */
export type SendResetPasswordResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the sendVerification operation.
 */
export type SendVerificationResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the setEmailVerified operation.
 */
export type SetEmailVerifiedResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the silentRegisterUser operation.
 */
export type SilentRegisterUserResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the validateEmail operation.
 */
export type ValidateEmailResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the validateCode operation.
 */
export type ValidateCodeResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};