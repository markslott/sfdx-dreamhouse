declare module "@apex/PropertyController.findAll" {
  export function findAll(param: {searchKey: any, minPrice: any, maxPrice: any, pageSize: any, pageNumber: any}): Promise<any>;
}
declare module "@apex/PropertyController.findById" {
  export function findById(param: {propertyId: any}): Promise<any>;
}
declare module "@apex/PropertyController.getAvailableProperties" {
  export function getAvailableProperties(): Promise<any>;
}
declare module "@apex/PropertyController.getSimilarProperties" {
  export function getSimilarProperties(param: {propertyId: any, bedrooms: any, price: any, searchCriteria: any}): Promise<any>;
}
