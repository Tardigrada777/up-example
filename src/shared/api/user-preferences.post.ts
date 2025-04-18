import type { UserPreferenceApi } from "./user-preferences.types";

export const userPreferencesPost = {
  async exec({ preference }: { preference: UserPreferenceApi }) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("User preference saved:", preference);
        resolve(null);
      }, 1000);
    });
  },
};
