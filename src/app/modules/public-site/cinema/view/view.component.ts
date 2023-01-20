import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DateFormatsEnum } from 'src/app/shared/enums/date-formats';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { MovieSlot, MovieSlotInterface } from 'src/app/shared/resources/movie-slot/movie-slot.service';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import { DayjsService } from 'src/app/shared/services/dayjs/dayjs.service';
import { Sizes } from 'src/app/shared/types/sizes';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface DayOfWeekSlots {
  key: string,
  slots: MovieSlot[]
}

@UntilDestroy()
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public formGroup: FormGroup;

  public cinemaId: string | undefined;
  public iconsEnum = IonIcons;
  public sizesEnum = Sizes;
  public cinema: Cinema = new Cinema();
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  public movies: Movie[] = [];

  public dateFormatsEnum = DateFormatsEnum;
  public dates: {
    movieId: string,
    data: DayOfWeekSlots[]
  }[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dayJsService: DayjsService,
    private formBuilder: FormBuilder,
    private cinemaService: CinemaService,
    private httpClient: HttpClient,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.cinemaId = (this.activatedRoute.snapshot.params as any).cinemaId;
    this.loadCinema();
  }

  public getDatesByMovieId(movieId: number | string): DayOfWeekSlots[] {
    return this.dates.find((date: any) => date.movieId === movieId)?.data;
  }

  /**
   * Sort dates 
   */
  public sortSlots() {
    this.movies.forEach((movie: Movie) => {
      this.dates.push({
        movieId: movie.id,
        data: []
      });

      const movieDatesIndex = this.dates.length - 1;
      movie.relationships.slots.data.forEach((slot: MovieSlot) => {
        const slotDate: string = this.dayJsService.dayJs(slot.attributes.date).format(this.dateFormatsEnum.date_back);
        /**
         * Check if date exists
         */
        let findDate = this.dates[movieDatesIndex].data.find((dayOfWeekSlot: DayOfWeekSlots) => dayOfWeekSlot.key === slotDate);

        if (!findDate) {
          this.dates[movieDatesIndex].data.push({
            key: slotDate,
            slots: []
          });
        }

        findDate = this.dates[movieDatesIndex].data.find((dayOfWeekSlot: DayOfWeekSlots) => dayOfWeekSlot.key === slotDate);

        findDate.slots.push(slot);
      });
    });
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      map: [null]
    });
  }

  private loadCinema() {
    this.httpClient.get('/cinema/' + this.cinemaId).pipe(untilDestroyed(this)).subscribe((cinema: Cinema) => {
      this.cinema = cinema;
      this.filterMovies();

      this.sortSlots();

      console.log('this.movies , ', this.movies);
      this.changeDetectorRef.markForCheck();
    });
  }

  /**
   * Filter movies from slots
   */
  private filterMovies() {
    this.cinema.relationships.slots.data.forEach((slot: MovieSlot) => {
      const movieIndex: number = this.movies.findIndex((movie: Movie) => Number(movie.id) === Number((slot as any).attributes.movie_id));

      if(movieIndex >= 0) {
        this.movies[movieIndex].addRelationship(slot, 'slots');
        return;
      } 

      const movie = new Movie();
      movie.id = slot.relationships.movie.id;
      movie.attributes = slot.relationships.movie.attributes;
      movie.addRelationship(slot, 'slots');

      this.movies.push(movie);
    })
  }
}
