import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  public cinemaId: string | undefined;
  public cinema: Cinema = new Cinema();
  public swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    this.cinema.addRelationship(movie, 'movies');
  }

}
