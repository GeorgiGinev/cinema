import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { JsonResource } from 'src/app/shared/resources/resource/resource.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  public movies: JsonCollection<JsonResource> = new JsonCollection({
    total_items: 6,
    items_per_page: 2,
    current_page: 1
  });
  public formGroup: FormGroup;
  public loadData: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.createForm();
  }

  ngOnInit() {
    const movie = new Movie();
    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.movies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.movies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.movies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.movies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.movies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.movies.push(cloneDeep(movie));
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      keywords: [null]
    });

    this.createControlChangeListener();
  }

  /**
 * Add searchbar control change listener
 */
  private createControlChangeListener() {
    this.formGroup.get('keywords').valueChanges.pipe(debounceTime(500), untilDestroyed(this)).subscribe(() => {
      this.loadData = true;
      this.changeDetectorRef.markForCheck();
      setTimeout(() => {
        this.loadData = false;
        this.changeDetectorRef.markForCheck();
      }, 2000)
    });
  }
}
