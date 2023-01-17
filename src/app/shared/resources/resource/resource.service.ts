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
    if (relation && (this.relationships[relationship] instanceof JsonCollection)) {
      console.log('collection');
      this.relationships[relation].data.push(resource);
      return;
    }

    if (relation && (this.relationships[relationship] instanceof JsonResource)) {
      this.relationships[relation] = resource;
      return;
    }
  }

  public clearRelationship(relationship: string) {
    const relation: any = Object.keys(this.relationships).find((key: string) => key === relationship);
    if (relation && (this.relationships[relationship] instanceof JsonCollection)) {
      this.relationships[relation] = new JsonCollection();
      return;
    }

    if (relation && (this.relationships[relationship] instanceof JsonResource)) {
      this.relationships[relation] = new JsonResource();
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
        this.createPath = '/' + this.resource + '/' + resource['id'];
      } else {
        this.createPath = '/' + this.resource;
      }
    }

    Object.keys(resource['relationships']).forEach((key: string) => {
      if(!resource['relationships'][key] || resource['relationships'][key]?.data?.length === 0) {
        delete resource['relationships'][key];
      }
    });

    if(resource['attributes']['deleted_at']) {
      delete resource['attributes']['deleted_at'];
    }

    if (resource['id']) {
      return this.httpClient.put(this.createPath, JSON.stringify(resource)).toPromise();
    } else {
      return this.httpClient.post(this.createPath, JSON.stringify(resource)).toPromise();
    }
  }


  /**
   * Get all resources
   * @param filters filters
   * @returns 
   */
  public all(filters: {} | null = null): Observable<JsonCollection<JsonResource>> {
    return this.httpClient.get('/' + this.resource, {
      params: filters
    }) as Observable<JsonCollection<JsonResource>>;
  }

  /**
   * Get a resource
   * @param id string 
   */
  public get(id: string): Observable<JsonResource> {
    return this.httpClient.get('/' + this.resource + '/' + id) as Observable<JsonResource>;
  }

  /**
   * Delete a resource
   * @param id string
   */
  public delete(id: string): Promise<JsonResource> {
    return this.httpClient.delete('/' + this.resource + '/' + id).toPromise() as Promise<any>;
  }

  /**
   * Restore a resource
   * @param resource 
   */
  public restore(id: string): Promise<JsonResource> {
    return this.httpClient.put('/' + this.resource + '/restore/' + id, {}).toPromise() as Promise<any>;
  }
}
