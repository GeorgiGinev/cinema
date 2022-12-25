import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { JsonResource } from 'src/app/shared/resources/resource/resource';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public topCinemas: JsonCollection<JsonResource> = new JsonCollection({
    total_items: 6,
    items_per_page: 2,
    current_page: 1
  });

  constructor() { }

  ngOnInit() {
    const cinema = new Cinema();
    cinema.fillAttributes({
      name: 'Кино Арена',
      description: 'Кино арена в София Ринг мол',
      images: [
        'https://i.ytimg.com/vi/eja0GqlWfRo/maxresdefault.jpg',
        'https://www.kinoarena.com/uploads/media/stenik_cinemas/0001/06/49b953b373b169e9871b314a93fe90753fc4e227.jpeg',
        'https://p2.novo5.com/k/i/kino-arena-zapad-224-1140x0.jpg'
      ]
    });

    this.topCinemas.data.push(cloneDeep(cinema));

    cinema.fillAttributes({
      name: 'Cinemacity',
      description: 'Cinemacity в София, мол Парадайс',
      images: [
        'http://www.visitplovdiv.com//sites/default/files/freetime/%D0%A1%D0%B8%D0%BD%D0%B5%D0%BC%D0%B0%20%D1%81%D0%B8%D1%82%D0%B8_0.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/0f/26/df/ef/cinema-city-in-iulius.jpg',
        'http://avatti.eu/poze/80-CCSV4.jpg'
      ]
    });

    this.topCinemas.data.push(cloneDeep(cinema));

    console.log('this.topCinemas : ', this.topCinemas);
  }

}
