import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public cinema: Cinema;
  public formGroup: FormGroup;

  constructor(
    private panelService: PanelPageService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    if(this.cinema) {
      this.panelService.updateHeader('Edit cinema');
    } else {
      this.panelService.updateHeader('Add cinema');
    }
  }

  /**
   * Create form group
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null]
    })
  }
}
