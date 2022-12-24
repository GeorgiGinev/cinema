import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsInterface } from 'src/app/shared/interfaces/breadcrumbs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbsItems: BreadcrumbsInterface[];

  constructor(
    private router: Router
  ) { }

  /**
   * Generate breadcrumbs array
   */
  public generate(): BreadcrumbsInterface[] {
    this.breadcrumbsItems = [{
      label: 'Home',
      route: '/home'
    }];
    
    const route = this.router.url.split('/');
    /**
     * Remove first element of the route array, because it is an empty string
     */
    route.shift();

    route.forEach((item: string) => {
      this.pushToBreadcrumbsArray(item);
    });

    return this.breadcrumbsItems;
  }

  /**
   * Push given string to breadcrumbs array
   * @param item string
   */
  private pushToBreadcrumbsArray(item: string) {
    this.breadcrumbsItems.push({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      route: '/' + item
    })
  }
}
