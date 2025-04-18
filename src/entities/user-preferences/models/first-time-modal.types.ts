import type { UserPreferenceApi } from "shared/api";

type FirstTimeModalPreference = {
  key: "first-time-modal:balances" | "first-time-modal:scheduled-payments";
  value: string;
};

export interface FirstTimeModalApi extends UserPreferenceApi {
  preferences: FirstTimeModalPreference[];
}
