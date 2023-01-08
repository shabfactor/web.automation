import { UserProfile } from "../types/userProfile";
import { userProfiles } from "../data/userProfiles";

export function getUserProfile(profileKey: string): UserProfile {
    return userProfiles.find((userProfile) => userProfile.profileKey === profileKey);
}
