import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { JsonCollection } from "../collection/collection";

export class JsonResource {
  public attributes: any = {};
  public relationships: any = {};
  public id: string = '';

  /**
   * Fill attributes to data
   *
   * @param passedData object
   */
  public fillAttributes(passedData: any) {
    Object.keys(passedData).forEach((passedKey: string) => {
      const foundAttribute = Boolean(Object.keys(this.attributes).find((key: string) => key === passedKey));

      if (!foundAttribute) {
        return;
      }

      this.attributes[passedKey] = passedData[passedKey];
    });
  }

  /**
   * Add a resource to relationship of the parent resource
   * @param relationship 
   * @param resource 
   */
  public addRelationship(resource: JsonResource, relationship: string) {
    const relation: any = Object.keys(this.relationships).find((key: string) => key === relationship);

    if (relation && (this.relationships[relation] instanceof JsonCollection)) {
      this.relationships[relation].data.push(resource);
      return;
    }

    if (relation && (this.relationships[relation] instanceof JsonResource)) {
      this.relationships[relation] = resource;
      return;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export abstract class JsonResourceService<JsonResource> {
  public env = environment;
  public abstract resource: string;

  public createPath: string;
  public updatePath: string;
  public getPath: string;

  constructor(
    protected httpClient: HttpClient
  ) { }

  /**
   * Save a resource
   * @param resource 
   * @returns 
   */
  public save(resource: JsonResource): Promise<any> {
    if (!this.createPath) {
      if (resource['id']) {
        this.createPath = '/' + this.resource + '/update/' + resource['id'];
      } else {
        this.createPath = '/' + this.resource + '/create';
      }
    }

    Object.keys(resource['relationships']).forEach((key: string) => {
      if(!resource['relationships'][key] || resource['relationships'][key]?.data?.length === 0) {
        delete resource['relationships'][key];
      }
    });

    return this.httpClient.post(this.createPath, JSON.stringify(resource)).toPromise();
  }


  /**
   * Get all resources
   * @param filters filters
   * @returns 
   */
  public all(filters: {} | null = null): Observable<JsonCollection<JsonResource>> {
    let filt = '';
    if (filters) {
      filt = '?';

      Object.keys(filters).forEach((key: string, index: number) => {
        filt += key + '=' + filters[key];
        if (index < Object.keys(filters).length - 1) {
          filt += ';'
        }
      });
    }

    return this.httpClient.get('/' + this.resource + filt) as Observable<JsonCollection<JsonResource>>;
  }

  /**
   * Get with filters
   * @param filters 
   */
  public get(id: string | null = null): Observable<JsonResource> {
    let filt = '';
    if (id) {
      filt = '?id=' + id;
    }

    return this.httpClient.get('/' + this.resource + filt) as Observable<JsonResource>;
  }
}
