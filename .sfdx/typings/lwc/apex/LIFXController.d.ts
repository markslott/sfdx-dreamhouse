declare module "@apex/LIFXController.getLights" {
  export function getLights(): Promise<any>;
}
declare module "@apex/LIFXController.setPower" {
  export function setPower(param: {lightId: any, isOn: any}): Promise<any>;
}
declare module "@apex/LIFXController.setBrightness" {
  export function setBrightness(param: {lightId: any, brightness: any}): Promise<any>;
}
