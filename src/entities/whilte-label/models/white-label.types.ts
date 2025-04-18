import type { UserPreferenceApi } from "../../../shared/api/user-preferences.types";

type WhiteLabelPreference = {
  key: "white-label-preference:colors";
  value: {
    key: "background" | "text";
    value: string;
  }[];
};

export interface WhiteLabelApi extends UserPreferenceApi {
  preferences: WhiteLabelPreference[];
}
