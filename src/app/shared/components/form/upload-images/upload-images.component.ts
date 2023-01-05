import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { BaseInput } from '../base-input';
import * as cloneDeep from 'lodash/cloneDeep';
import { Sizes } from 'src/app/shared/types/sizes';
import { Shapes } from 'src/app/shared/types/shapes';

@Component({
  selector: 'ci-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UploadImagesComponent
    }
  ]
})
export class UploadImagesComponent extends BaseInput implements OnInit {
  @Input() label: string;
  @Input() multiple: boolean = true;

  public iconsEnum = IonIcons;
  public sizes = Sizes;
  public shapesEnum = Shapes;

  public imagePaths: string[];
  
  public uploadImagesForm: FormGroup;

  constructor(
    protected controlContainer: ControlContainer,
    private toastService: ToastService,
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {
    super(controlContainer);

    this.createForm();
  }

  ngOnInit() {
    super.onInit();

    this.imagePaths = [];
  }

  /**
   * Remove image from array
   * @param index 
   */
  public removeImage(index: number) {
    this.imagePaths = this.imagePaths.filter((image: string, i: number) => {
      if(index !== i) {
        return image;
      }
    });

    this.formControl.patchValue(this.imagePaths);
  }

  /**
   * Convert images to base64 and add them to an array and to form control
   * @param event 
   * @returns 
   */
  public changeEvent(event: any) {
    if(!this.multiple) {
      this.imagePaths = [];
      this.formControl.patchValue(this.imagePaths);
    }

    const files = event.target.files;
    if (files.length === 0) {
      return;
    }

    for (let image = 0; image < files.length; image++) {
      const mimeType = files[image].type;
      if (mimeType.match(/image\/*/) === null) {
        this.toastService.error({
          header: 'Only images are supported.'
        });
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(files[image]);
      reader.onload = (_event) => {
        this.imagePaths.push(String(reader.result));

        this.imagePaths = cloneDeep(this.imagePaths);

        this.formControl.patchValue(this.imagePaths);

        this.changeDetectorRef.markForCheck();
      }
    }

    event.target.value = '';
  }

  private createForm() {
    this.uploadImagesForm = this.formBuilder.group({
      images: [null]
    });
  }
}
