import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Sizes } from '../../../shared/types/sizes';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface slideData {
  image: string,
}

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public buttonSizes = Sizes;
  public iconsEnum = IonIcons;
  public topMovies: JsonCollection<Movie> = new JsonCollection<Movie>();
  public topCinemas: JsonCollection<Cinema> = new JsonCollection<Cinema>();

  public slidersData: slideData[] = [
    {
      image: 'assets/cinema-home/1.jpg'
    },
    {
      image: 'assets/cinema-home/2.jpg'
    },
    {
      image: 'assets/cinema-home/3.jpg'
    }
  ];

  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(
    private sessionService: SessionService,
    private httpClient: HttpClient,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadCinemas();
    this.loadMovies();
  }

  private loadMovies() {
    this.httpClient.get('/allMovies').pipe(untilDestroyed(this)).subscribe((movies: JsonCollection<Movie>) => {
      this.topMovies = movies;

      this.changeDetectorRef.markForCheck();
    });
  }

  private loadCinemas() {
    this.httpClient.get('/allCinemas').pipe(untilDestroyed(this)).subscribe((cinemas: JsonCollection<Cinema>) => {
      this.topCinemas = cinemas;

      this.changeDetectorRef.markForCheck();
    });
  }
}
