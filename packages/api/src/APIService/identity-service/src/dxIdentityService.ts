/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { DxIdentityServiceContext } from "./dxIdentityServiceContext";

class DxIdentityService extends DxIdentityServiceContext {
  /**
   * Initializes a new instance of the DxIdentityService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.DxIdentityServiceOptions) {
    super(options);
  }

  /**
   * Register a user.
   * @summary Register a user
   * @param [options] The optional parameters
   * @returns Promise<Models.RegisterUserResponse>
   */
  registerUser(options?: Models.DxIdentityServiceRegisterUserOptionalParams): Promise<Models.RegisterUserResponse>;
  /**
   * @param callback The callback
   */
  registerUser(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  registerUser(options: Models.DxIdentityServiceRegisterUserOptionalParams, callback: msRest.ServiceCallback<any>): void;
  registerUser(options?: Models.DxIdentityServiceRegisterUserOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.RegisterUserResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      registerUserOperationSpec,
      callback) as Promise<Models.RegisterUserResponse>;
  }

  /**
   * Reset password
   * @summary Reset password
   * @param [options] The optional parameters
   * @returns Promise<Models.ResetPasswordResponse>
   */
  resetPassword(options?: Models.DxIdentityServiceResetPasswordOptionalParams): Promise<Models.ResetPasswordResponse>;
  /**
   * @param callback The callback
   */
  resetPassword(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  resetPassword(options: Models.DxIdentityServiceResetPasswordOptionalParams, callback: msRest.ServiceCallback<any>): void;
  resetPassword(options?: Models.DxIdentityServiceResetPasswordOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.ResetPasswordResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      resetPasswordOperationSpec,
      callback) as Promise<Models.ResetPasswordResponse>;
  }

  /**
   * Send Reset password to user.
   * @summary Send Reset password to user.
   * @param [options] The optional parameters
   * @returns Promise<Models.SendResetPasswordResponse>
   */
  sendResetPassword(options?: Models.DxIdentityServiceSendResetPasswordOptionalParams): Promise<Models.SendResetPasswordResponse>;
  /**
   * @param callback The callback
   */
  sendResetPassword(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  sendResetPassword(options: Models.DxIdentityServiceSendResetPasswordOptionalParams, callback: msRest.ServiceCallback<any>): void;
  sendResetPassword(options?: Models.DxIdentityServiceSendResetPasswordOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SendResetPasswordResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      sendResetPasswordOperationSpec,
      callback) as Promise<Models.SendResetPasswordResponse>;
  }

  /**
   * Send Email Verification.
   * @summary Send Email Verification
   * @param [options] The optional parameters
   * @returns Promise<Models.SendVerificationResponse>
   */
  sendVerification(options?: Models.DxIdentityServiceSendVerificationOptionalParams): Promise<Models.SendVerificationResponse>;
  /**
   * @param callback The callback
   */
  sendVerification(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  sendVerification(options: Models.DxIdentityServiceSendVerificationOptionalParams, callback: msRest.ServiceCallback<any>): void;
  sendVerification(options?: Models.DxIdentityServiceSendVerificationOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SendVerificationResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      sendVerificationOperationSpec,
      callback) as Promise<Models.SendVerificationResponse>;
  }

  /**
   * Validate code by email/text and set emailVerified flag.
   * @summary Validate code by email/text and set emailVerified flag.
   * @param [options] The optional parameters
   * @returns Promise<Models.SetEmailVerifiedResponse>
   */
  setEmailVerified(options?: Models.DxIdentityServiceSetEmailVerifiedOptionalParams): Promise<Models.SetEmailVerifiedResponse>;
  /**
   * @param callback The callback
   */
  setEmailVerified(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setEmailVerified(options: Models.DxIdentityServiceSetEmailVerifiedOptionalParams, callback: msRest.ServiceCallback<any>): void;
  setEmailVerified(options?: Models.DxIdentityServiceSetEmailVerifiedOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SetEmailVerifiedResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      setEmailVerifiedOperationSpec,
      callback) as Promise<Models.SetEmailVerifiedResponse>;
  }

  /**
   * Register a user without password
   * @summary Register a user
   * @param [options] The optional parameters
   * @returns Promise<Models.SilentRegisterUserResponse>
   */
  silentRegisterUser(options?: Models.DxIdentityServiceSilentRegisterUserOptionalParams): Promise<Models.SilentRegisterUserResponse>;
  /**
   * @param callback The callback
   */
  silentRegisterUser(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  silentRegisterUser(options: Models.DxIdentityServiceSilentRegisterUserOptionalParams, callback: msRest.ServiceCallback<any>): void;
  silentRegisterUser(options?: Models.DxIdentityServiceSilentRegisterUserOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.SilentRegisterUserResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      silentRegisterUserOperationSpec,
      callback) as Promise<Models.SilentRegisterUserResponse>;
  }

  /**
   * Validate email.
   * @summary Validate email.
   * @param [options] The optional parameters
   * @returns Promise<Models.ValidateEmailResponse>
   */
  validateEmail(options?: Models.DxIdentityServiceValidateEmailOptionalParams): Promise<Models.ValidateEmailResponse>;
  /**
   * @param callback The callback
   */
  validateEmail(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  validateEmail(options: Models.DxIdentityServiceValidateEmailOptionalParams, callback: msRest.ServiceCallback<any>): void;
  validateEmail(options?: Models.DxIdentityServiceValidateEmailOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.ValidateEmailResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      validateEmailOperationSpec,
      callback) as Promise<Models.ValidateEmailResponse>;
  }

  /**
   * Validate code by email/text.
   * @summary Validate code by email/text.
   * @param [options] The optional parameters
   * @returns Promise<Models.ValidateCodeResponse>
   */
  validateCode(options?: Models.DxIdentityServiceValidateCodeOptionalParams): Promise<Models.ValidateCodeResponse>;
  /**
   * @param callback The callback
   */
  validateCode(callback: msRest.ServiceCallback<any>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  validateCode(options: Models.DxIdentityServiceValidateCodeOptionalParams, callback: msRest.ServiceCallback<any>): void;
  validateCode(options?: Models.DxIdentityServiceValidateCodeOptionalParams | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.ValidateCodeResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      validateCodeOperationSpec,
      callback) as Promise<Models.ValidateCodeResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const registerUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.UserDetails
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const resetPasswordOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users/reset-password",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.PasswordDetails
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const sendResetPasswordOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "v1/users/send-reset-password-email",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Email
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    404: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const sendVerificationOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "v1/users/send-verification-email",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Email
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    404: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const setEmailVerifiedOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users/set-email-verified",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.ValidationDetails
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const silentRegisterUserOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users/silent-registration",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.RegistrationDetails
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const validateEmailOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users/validate",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Email
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

const validateCodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/users/validate-code",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.ValidationDetails
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    400: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    500: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {}
  },
  serializer
};

export {
  DxIdentityService,
  DxIdentityServiceContext,
  Models as DxIdentityServiceModels,
  Mappers as DxIdentityServiceMappers
};
