export class WhiteLabel {
  public backgroundColor = "#FFFFFF";

  // Should be always in HEX.
  private _textColor = "#000000";

  get textColor(): string {
    return this._textColor;
  }

  public setTextColor(rgba: string) {
    // imagine conversion here
    const converted = rgba;
    this._textColor = converted;
  }
}
