import { JsonCollection } from "../collection/collection";

export class JsonResource<JsonResource> {
  public data: any = {};
  public relationships: any = {};
  public id: string = '';

  /**
   * Fill attributes to data
   *
   * @param passedData object
   */
  public fillAttributes(passedData: any) {
    Object.keys(passedData).forEach((passedKey: string) => {
      const foundAttribute = Boolean(Object.keys(this.data).find((key: string) => key === passedKey));

      if(!foundAttribute) {
        return;
      }

      this.data[passedKey] = passedData[passedKey];
    });
  }

  /**
   * Add a resource to relationship of the parent resource
   * @param relationship 
   * @param resource 
   */
  public addRelationship(resource: JsonResource, relationship: string) {
    const relation: any = Object.keys(this.relationships).find((key: string) => key === relationship);

    if(relation && (this.relationships[relation] instanceof JsonCollection)) {
      this.relationships[relation].data.push(resource);
      return;
    }

    if(relation && (this.relationships[relation] instanceof JsonResource)) {
      this.relationships[relation] = resource;
      return;
    }
  }
}
