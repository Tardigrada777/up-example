import { userPreferencesGet } from "shared/api";
import { userPreferencesPost } from "../api/user-preferences.post";
import type { UserPreferenceApi } from "../api/user-preferences.types";

export abstract class UserPreference {
  public group: string = "";

  /**
   * Maps the API response to the UserPreference class.
   * @param response The response from the API.
   */
  protected fromApi(response: UserPreferenceApi): UserPreference {
    throw new Error("fromApi() method not implemented. response: " + response);
  }

  /**
   * Maps the UserPreference class to the API format.
   * @returns The UserPreference in API format.
   */
  protected toApi(): UserPreferenceApi {
    throw new Error("toApi() method not implemented. state: " + this);
  }

  /**
   * Saves current state of the preference through the API.
   */
  public async save(): Promise<void> {
    try {
      const api = this.toApi();
      await userPreferencesPost.exec({ preference: api });
    } catch (error) {
      // will catch "not implemented" error
    }
  }

  /**
   * Loads the preference from the API.
   * @param name The name of the preference to load.
   */
  public async load(): Promise<UserPreference> {
    try {
      const response = await userPreferencesGet.exec({ name: this.group });
      return this.fromApi(response);
    } catch (error) {
      // will catch "not implemented" error
      throw new Error(
        error + " load() method not implemented. name: " + this.group
      );
    }
  }
}
