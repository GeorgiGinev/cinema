import { Component, Input, OnInit } from '@angular/core';
import { IonIcons } from '../../enums/ion-icons';
import { ModalService } from '../../services/modal/modal.service';
import { Sizes } from '../../types/sizes';

@Component({
  selector: 'ci-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
})
export class ModalContainerComponent implements OnInit {
  @Input() title: string;
  
  public iconsEnum = IonIcons;
  public sizes = Sizes;
  
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {}

  public close() {
    this.modalService.closeModal(null, true);
  }
}
