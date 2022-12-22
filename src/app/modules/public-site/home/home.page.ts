import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Sizes } from '../../../shared/types/sizes';
import SwiperCore, { Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

interface slideData {
  image: string,
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public buttonSizes = Sizes;
  public iconsEnum = IonIcons;
  public topMovies: Movie[] = [];
  public topCinemas: Cinema[] = [];

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
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
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

    this.topCinemas.push(cloneDeep(cinema));

    cinema.fillAttributes({
      name: 'Cinemacity',
      description: 'Cinemacity в София, мол Парадайс',
      images: [
        'http://www.visitplovdiv.com//sites/default/files/freetime/%D0%A1%D0%B8%D0%BD%D0%B5%D0%BC%D0%B0%20%D1%81%D0%B8%D1%82%D0%B8_0.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/0f/26/df/ef/cinema-city-in-iulius.jpg',
        'http://avatti.eu/poze/80-CCSV4.jpg'
      ]
    });

    this.topCinemas.push(cloneDeep(cinema))

    const movie = new Movie();
    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.topMovies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.topMovies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.topMovies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.topMovies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Аватар:Природата на водата 3D HFR',
      description: 'Повече от десет години след събитията в Аватар Джейк Съли (Сам Уортингтън) живее щастливо заедно с Нейтири (Зоуи Салдана) и техните деца. Когато стара заплаха се завръща на Пандора, двамата са принудени да напуснат дома си и да се отправят към различни региони на изобилстващата от жи',
      image: 'https://wallpapercave.com/wp/wp5212080.jpg',
      background_image: 'https://assets-prd.ignimgs.com/2021/12/14/avatar-2-concept-art-1639522729106.jpg'
    });

    this.topMovies.push(cloneDeep(movie));

    movie.fillAttributes({
      name: 'Брутална нощ',
      description: '',
      image: 'https://m.media-amazon.com/images/M/MV5BYzg2NWNhOWItYjA3Yi00MzhhLTg4ZmItYzM3ZTIwN2U0ZGQ5XkEyXkFqcGdeQXVyMzEyMDQzNzY@._V1_FMjpg_UX1000_.jpg',
      background_image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/David-Harbour-as-Santa-Claus-on-the-Dolby-Cinemas-Violent-Night-Poster.jpg'
    });

    this.topMovies.push(cloneDeep(movie));
  }
}
