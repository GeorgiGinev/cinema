import { JsonResource } from "../resource/resource.service";

export interface JsonCollectionPaginationInterface {
  total: number,
  per_page: number,
  current_page: number
}

export interface JsonCollectionInterface {
  data: JsonResource[];
  total: number,
  per_page: number,
  current_page: number
}

export class JsonCollection<JsonResource> {
  public data: JsonResource[] = [];
  public total: 0;
  public per_page: 0;
  public current_page: 0;

  constructor(pagination?: JsonCollectionPaginationInterface) {
    if(pagination) {
      Object.keys(pagination).forEach((key: string) => {
        this[key] = pagination[key];
      });
    }
  }

  /**
   * Push to data array
   */
  public push(resource: JsonResource) {
    this.data.push(resource);
  }
}
