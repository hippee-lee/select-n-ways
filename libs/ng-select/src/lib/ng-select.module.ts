import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from './components/option/option.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  imports: [CommonModule],
  exports: [OptionComponent, SelectComponent],
  declarations: [OptionComponent, SelectComponent],
})
export class NgSelectModule {}
