import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { RdvComponent } from './component/rdv/rdv.component';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTimepickerModule } from 'mat-timepicker'

//import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from 'ngx-mat-datetime-picker';
@NgModule({
  declarations: [
    RdvComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatTimepickerModule
    //NgxMatDatetimePickerModule,
    //NgxMatTimepickerModule,
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RdvModule { }
