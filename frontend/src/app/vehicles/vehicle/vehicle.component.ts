import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicles.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'tr[app-vehicle]',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() vehicle:Vehicle = {
    placa: '',
    modelo: '',
    marca: '',
    serie: '',
    color: ''
  }

  constructor( private service: VehicleService) { }


  ngOnInit(): void {
  }

  
  deleteVehicle(){
    this.service.deleteVehicle(this.vehicle.placa).subscribe(resp => {
      window.location.reload();
    });
  }

  updateVehicle(){
    this.service.updateVehicle(this.vehicle.placa, this.vehicle).subscribe();
    
  }
}
