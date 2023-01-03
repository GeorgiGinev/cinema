import { Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public iconsEnum = IonIcons;
  public sizes = Sizes;
  
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {}

  public close() {
    this.modalService.closeModal();
  }

}
