import type { UserPreferenceApi } from "./user-preferences.types";

export const userPreferencesGet = {
  async exec({ name }: { name: string }) {
    return await new Promise<UserPreferenceApi>((resolve) => {
      setTimeout(() => {
        console.log("User preference loaded:", name);
        resolve({
          group: "white-label-preference",
          preferences: [
            {
              key: "white-label-preference:colors",
              value: [
                {
                  key: "background",
                  value: "#ffffff",
                },
                {
                  key: "text",
                  value: "#000000",
                },
              ],
            },
          ],
        });
      }, 1000);
    });
  },
};
