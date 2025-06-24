import { DeviceManager } from "ringcentral-web-phone/types";

export class KeywordsBasedDeviceManager implements DeviceManager {
  private _preferredInputDeviceKeyword: string = "AirPods";
  public setPreferredInputDeviceKeyword(keyword = "AirPods") {
    this._preferredInputDeviceKeyword = keyword;
  }
  private _preferredOutputDeviceKeyword: string = "AirPods";
  public setPreferredOutputDeviceKeyword(keyword = "AirPods") {
    this._preferredOutputDeviceKeyword = keyword;
  }

  public async getInputDeviceId(): Promise<string> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = devices.filter((device) =>
      device.kind === "audioinput"
    );
    let preferredDevice = audioDevices.find((device) =>
      device.label.includes(this._preferredInputDeviceKeyword)
    );
    if (!preferredDevice && audioDevices.length > 0) {
      preferredDevice = audioDevices[0];
    }
    return preferredDevice!.deviceId;
  }

  public async getOutputDeviceId(): Promise<string | undefined> {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = devices.filter((device) =>
      device.kind === "audiooutput"
    );
    let preferredDevice = audioDevices.find((device) =>
      device.label.includes(this._preferredOutputDeviceKeyword)
    );
    if (!preferredDevice && audioDevices.length > 0) {
      preferredDevice = audioDevices[0];
    }
    return preferredDevice?.deviceId;
  }
}
