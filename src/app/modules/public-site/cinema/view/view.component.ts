import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateFormatsEnum } from 'src/app/shared/enums/date-formats';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { MovieSlot } from 'src/app/shared/resources/movie-slot/movie-slot.service';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import { DayjsService } from 'src/app/shared/services/dayjs/dayjs.service';
import { Sizes } from 'src/app/shared/types/sizes';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface DayOfWeekSlots {
  key: string,
  slots: MovieSlot[]
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
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
  public dateFormatsEnum = DateFormatsEnum;
  public dates: {
    movieId: string,
    data: DayOfWeekSlots[]
  }[] = [];

  public times: string[] = [
    '2022-11-26 10:15',
    '2022-11-26 13:15',
    '2022-11-26 17:15',
    '2022-11-26 20:15',

    '2022-11-27 10:15',
    '2022-11-27 13:15',
    '2022-11-27 17:15',
    '2022-11-27 20:15',

    '2022-11-28 10:15',
    '2022-11-28 13:15',
    '2022-11-28 17:15',
    '2022-11-28 20:15',

    '2022-11-29 10:15',
    '2022-11-29 13:15',
    '2022-11-29 17:15',
    '2022-11-29 20:15',

    '2022-11-30 10:15',
    '2022-11-30 13:15',
    '2022-11-30 17:15',
    '2022-11-30 20:15',

    '2022-12-1 10:15',
    '2022-12-1 13:15',
    '2022-12-1 17:15',
    '2022-12-1 20:15',

    '2022-12-2 10:15',
    '2022-12-2 13:15',
    '2022-12-2 17:15',
    '2022-12-2 20:15',
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dayJsService: DayjsService
  ) { }

  ngOnInit() {
    this.cinemaId = (this.activatedRoute.snapshot.params as any).cinemaId;

    this.cinema.fillAttributes({
      name: 'Кино Арена',
      description: 'Кино арена в София Ринг мол',
      images: [
        'https://i.ytimg.com/vi/eja0GqlWfRo/maxresdefault.jpg',
        'https://www.kinoarena.com/uploads/media/stenik_cinemas/0001/06/49b953b373b169e9871b314a93fe90753fc4e227.jpeg',
        'https://p2.novo5.com/k/i/kino-arena-zapad-224-1140x0.jpg'
      ],
      logo: 'https://www.slaskibiznes.pl/images/galbig3/news/7177/283968859-10160338829937884-6422710364360940698-n_63087ace238b14_50008829.jpg.jpg'
    });

    const movie = new Movie();
    movie.fillAttributes({
      name: 'Брутална нощ',
      description: 'Кино арена в София Ринг мол',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });
    movie.id = '2';

    for (let i = 0; i < this.times.length; i++) {
      const slot = new MovieSlot();
      slot.fillAttributes({
        movieId: '2',
        date: this.dayJsService.dayJs(this.times[i]).format(this.dateFormatsEnum.date_time_back)
      });

      slot.id = i+1 + '';

      movie.addRelationship(slot, 'slots');
    }
    this.cinema.addRelationship(movie, 'movies');

    this.sortSlots();
  }

  public getDatesByMovieId(movieId: string): DayOfWeekSlots[] {
    return this.dates.find((date: any) => date.movieId === movieId)?.data;
  }

  /**
   * Sort dates 
   */
  public sortSlots() {
    this.cinema.relationships.movies.data.forEach((movie: Movie) => {
      this.dates.push({
        movieId: movie.id,
        data: []
      });

      const movieDatesIndex = this.dates.length - 1;
      movie.relationships.slots.data.forEach((slot: MovieSlot) => {
        const slotDate: string = this.dayJsService.dayJs(slot.data.date).format(this.dateFormatsEnum.date_back);
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
}
