declare module "@apex/EinsteinVisionController.predict" {
  export function predict(param: {fileName: any, content: any, modelId: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.predictReal" {
  export function predictReal(param: {fileName: any, content: any, modelId: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.predictDemo" {
  export function predictDemo(param: {fileName: any, content: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.getDatasets" {
  export function getDatasets(): Promise<any>;
}
declare module "@apex/EinsteinVisionController.getModelsByDataset" {
  export function getModelsByDataset(param: {datasetId: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.deleteDataset" {
  export function deleteDataset(param: {datasetId: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.createDataset" {
  export function createDataset(param: {pathToZip: any}): Promise<any>;
}
declare module "@apex/EinsteinVisionController.trainModel" {
  export function trainModel(param: {modelName: any, datasetId: any}): Promise<any>;
}
