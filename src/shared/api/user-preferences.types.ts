export interface UserPreferenceApi {
  group: string;
  preferences: Preference[];
}

export interface Preference {
  key: string;
  value: string | Preference | Preference[];
}
