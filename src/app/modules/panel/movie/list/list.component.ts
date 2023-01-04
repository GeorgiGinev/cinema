import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs/operators';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../../panel-page.service';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  public iconsEnum = IonIcons;
  public formGroup: FormGroup;

  public loadData: boolean = false;
  public data: any[] = [];

  constructor(
    private panelPageService: PanelPageService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.panelPageService.updateHeader('Movies');
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      keywords: [null]
    });

    this.createControlChangeListener();
  }

    /**
   * Add searchbar control change listener
   */
     private createControlChangeListener() {
      this.formGroup.get('keywords').valueChanges.pipe(debounceTime(500), untilDestroyed(this)).subscribe(() => {
        this.loadData = true;
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
          this.loadData = false;
          this.changeDetectorRef.markForCheck();
        }, 2000)
      });
    }
}
