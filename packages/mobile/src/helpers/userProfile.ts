interface UserProfileResponse {
  username: string;
  password: string;
}

/**
 * get the json object of the user profiles
 * @param str
 */
export function getUserProfile(str: string): UserProfileResponse {
  const filename = `../userprofiles/sandbox/${str.replace(/\s+/g, '_')}.json`;
  const json = require(filename) as UserProfileResponse;
  return json;
}

/**
 * get the static messages from the constant file
 * @param str
 */
export function getErrorText(str: string): UserProfileResponse {
  const fileName = `../helpers/${str.replace(/\s+/g, '_')}.json`;
  const obj = require(fileName) as UserProfileResponse;
  return obj;
}
