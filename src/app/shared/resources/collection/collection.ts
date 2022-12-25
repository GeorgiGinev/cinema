import { JsonResource } from "../resource/resource";

export interface JsonCollectionPaginationInterface {
  total_items: number,
  items_per_page: number,
  current_page: number
}

export interface JsonCollectionInterface {
  data: JsonResource[];
  pagination: JsonCollectionPaginationInterface
}

export class JsonCollection<JsonResource> {
  public data: JsonResource[] = [];
  public pagination: JsonCollectionPaginationInterface = {
    total_items: 0,
    items_per_page: 0,
    current_page: 0
  }

  constructor(pagination?: JsonCollectionPaginationInterface) {
    this.pagination = pagination;
  }

  /**
   * Push to data array
   */
  public push(resource: JsonResource) {
    this.data.push(resource);
  }
}
