import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicles.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  placa : string = ''
  modelo : string = ''
  marca : string = ''
  serie : string = ''
  color : string = ''

  constructor( private service : VehicleService) { }

  ngOnInit(): void {
  }

  addVehicle(){
    let vehicle : Vehicle = {
      placa: this.placa, 
      modelo: this.modelo, 
      marca: this.marca, 
      serie: this.serie, 
      color: this.color
    }
    this.service.addVehicle( vehicle ).subscribe( () => {
      window.location.reload();
      
    });
  }
}
