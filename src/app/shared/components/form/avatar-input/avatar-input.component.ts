import { Component, HostBinding, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Sizes } from 'src/app/shared/types/sizes';
import { BaseInput } from '../base-input';

@Component({
  selector: 'ci-avatar-input',
  templateUrl: './avatar-input.component.html',
  styleUrls: ['./avatar-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AvatarInputComponent
    }
  ]
})

export class AvatarInputComponent extends BaseInput implements OnInit {
  public imagePath: string;
  public sizesEnum = Sizes;

  @HostBinding('class.ion-activatable') get activatable() {
    return true;
  }

  constructor(
    protected controlContainer: ControlContainer,
    private toastService: ToastService
  ) {
    super(controlContainer);
  }

  ngOnInit() {
    super.onInit();

    this.imagePath = this.formControl.value;
  }

  public onChangeEventListener(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastService.error({
        header: 'Only images are supported.'
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imagePath = String(reader.result);

      this.formControl.patchValue(this.imagePath);
    }
  }
}
