import { UserPreference } from "shared/models";
import type { FirstTimeModalApi } from "./first-time-modal.types";

/**
 * Class representing user preferences for first-time modal appearance.
 */
export class FirstTimeModalPreference extends UserPreference {
  group = "first-time-modal";

  private _balancesModal = true;
  private _scheduledPaymentsModal = true;

  public toggleBalancesModal() {
    this._balancesModal = !this._balancesModal;
  }

  public toggleScheduledPaymentsModal() {
    this._scheduledPaymentsModal = !this._scheduledPaymentsModal;
  }

  get hasSeenBalancesModal(): boolean {
    return this._balancesModal;
  }

  get hasSeenScheduledPaymentsModal(): boolean {
    return this._scheduledPaymentsModal;
  }

  protected toApi(): FirstTimeModalApi {
    return {
      group: this.group,
      preferences: [
        {
          key: "first-time-modal:balances",
          value: this._balancesModal + "",
        },
        {
          key: "first-time-modal:scheduled-payments",
          value: this._scheduledPaymentsModal + "",
        },
      ],
    };
  }

  protected fromApi(response: FirstTimeModalApi): FirstTimeModalPreference {
    this._balancesModal =
      response.preferences.find((p) => p.key === "first-time-modal:balances")
        ?.value === "true";
    this._scheduledPaymentsModal =
      response.preferences.find(
        (p) => p.key === "first-time-modal:scheduled-payments"
      )?.value === "true";
    return this;
  }
}
