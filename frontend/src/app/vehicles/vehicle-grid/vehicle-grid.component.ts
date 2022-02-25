import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicles.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  styleUrls: ['./vehicle-grid.component.css']
})
export class VehicleGridComponent implements OnInit {

  vehicles: Vehicle[] = []

  constructor( private service : VehicleService) { }

  ngOnInit(): void {
      this.service.getVehicles().subscribe( vehicles => {
          this.vehicles = vehicles;
      })
  }

  

}
