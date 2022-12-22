import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  public buttonSizes = Sizes;
  public iconsEnum = IonIcons;

  constructor() { }

  ngOnInit() {}

}
