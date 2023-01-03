import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  public formGroup: FormGroup;
  
  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {}

  public save() {
    console.log('save profile : ', this.formGroup.value);
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      avatar: [null]
    })
  }
}
