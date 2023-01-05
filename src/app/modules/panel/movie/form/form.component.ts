import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/resources/movies/movie.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public movie: Movie;
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private panelPageService: PanelPageService,
    private formService: FormService,
    private toastService: ToastService,
    private router: Router
  ) { 
    this.createForm();
  }

  ngOnInit() {
    if(this.movie) {
      this.panelPageService.updateHeader('Edit Movie')
    } else {
      this.panelPageService.updateHeader('Add Movie')
    }
  }

  public create() {
    this.formService.isValid(this.formGroup).then(() => {
      this.toastService.success({
        header: 'The movie was successfully added',
      });

      this.router.navigate(['/panel/movies']);
    }, () => {})
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(200)]],
      image: [null],
      background_image: [null]
    });
  }
}
