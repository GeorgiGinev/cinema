import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Sizes } from '../../../shared/types/sizes';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public buttonSizes = Sizes;

  constructor(
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {}
}
