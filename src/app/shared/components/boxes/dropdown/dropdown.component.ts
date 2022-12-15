import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSelect } from '@ionic/angular';
import { SelectItem } from 'src/app/shared/interfaces/select-item';

@Component({
  selector: 'ci-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  public selectedOption: string;
  
  @Input() navItems: SelectItem[];

  @ViewChild('selectOption', { static: false }) selectOption: IonSelect;
  
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  /**
   * Open selector when button is clicked
   * @param event mouse event
   */
   public openOptions(event: MouseEvent){
    this.selectOption.interface = 'popover';
    this.selectOption.open(event);
  }

  /**
   * Trigger event when option is selected and clear its value
   */
  public handleSelectChange(event: Event) {
    if(!this.selectedOption) {
      return;
    }

    let selectedItem: SelectItem = this.navItems.find((item: SelectItem) => item.value === this.selectedOption);

    if(selectedItem) {
      /**
       * Must be in timeout or its is going to trigger double click on an option
       */
      setTimeout(() => {
        this.selectedOption = null;
      })
      
      selectedItem.action();
    }
  }
}
