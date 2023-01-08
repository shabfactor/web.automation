import { UserProfile } from '../types/userProfile';

export const userProfiles: UserProfile[] = [
  // Valid
  {
    email: 'Chats.nerkar@grr.la',
    password: 'password1',
    profileKey: 'valid1',
  },
  {
    email: 'emailverified.user@email.com',
    password: 'password6',
    profileKey: 'valid2',
  },
  {
    email: 'emailverified2.user@email.com',
    password: 'password3',
    profileKey: 'valid3',
  },
  {
    email: 'smoke.test@grr.la',
    password: 'Smoke1',
    profileKey: 'smoke user'
  },

  // Unverified
  {
    email: 'emailunverified.user@email.com',
    password: 'password1',
    profileKey: 'unverified1',
  },
  {
    email: 'unverifiedmehak@gmail.com',
    password: 'password4',
    profileKey: 'unverified2',
  },
  {
    email: 'unverifieduser@vodafone.com',
    password: 'password',
    profileKey: 'unverified3',
  },
  {
    email: 'testunverified@yahoo.com',
    password: 'password',
    profileKey: 'unverified4',
  },

  // Invalid email
  {
    email: 'testAutomationyahoo.com',
    profileKey: 'invalidEmail1',
    password: 'password',
  },

  // Invalid credentials
  {
    email: 'emailverified.user@email.com',
    password: 'password',
    profileKey: 'invalidPassword1',
  },
  {
    email: 'emailverified2.user@email.com',
    password: 'password',
    profileKey: 'invalidPassword2',
  },
  {
    email: 'unverifiedmehak@gmail.com',
    password: 'pass1',
    profileKey: 'invalidPassword3',
  },
];
