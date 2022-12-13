import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
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
  
  constructor() { }

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
    let selectedItem: SelectItem = this.navItems.find((item: SelectItem) => item.value === (event as any).detail.value);

    this.selectOption.selectedText = null
    selectedItem.action();
  }
}
