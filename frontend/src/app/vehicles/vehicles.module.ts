import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleGridComponent } from './vehicle-grid/vehicle-grid.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VehicleGridComponent,
    AddVehicleComponent,
    VehicleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    VehicleGridComponent,
    AddVehicleComponent,
  ]
})
export class VehiclesModule { }
