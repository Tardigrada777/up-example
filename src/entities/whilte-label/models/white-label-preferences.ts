import { WhiteLabel } from "domain";
import { UserPreference } from "shared/models";
import type { WhiteLabelApi } from "./white-label.types";

export class WhiteLabelPreference extends UserPreference {
  group = "white-label-preference";

  private _whiteLabel = new WhiteLabel();

  get whiteLabel(): WhiteLabel {
    return this._whiteLabel;
  }

  set whiteLabel(value: WhiteLabel) {
    this._whiteLabel = value;
  }

  protected toApi(): WhiteLabelApi {
    return {
      group: this.group,
      preferences: [
        {
          key: "white-label-preference:colors",
          value: [
            {
              key: "background",
              value: this._whiteLabel.backgroundColor,
            },
            {
              key: "text",
              value: this._whiteLabel.textColor,
            },
          ],
        },
      ],
    };
  }

  protected fromApi(response: WhiteLabelApi): WhiteLabelPreference {
    console.log("fromApi", response);

    const colors = response.preferences[0].value;

    if (colors) {
      console.log(colors[1]);
      this._whiteLabel.backgroundColor = colors[0].value;
      this._whiteLabel.setTextColor(colors[1].value);
    }

    return this;
  }
}
