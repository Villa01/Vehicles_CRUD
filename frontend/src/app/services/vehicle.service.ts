import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/vehicles.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  baseUrl: string = 'http://localhost:5000/vehicles/'

  constructor(private http: HttpClient) { }

  updateVehicle(placa: string, vehicle: Vehicle) {
    return this.http.put(`${this.baseUrl}${placa}`, vehicle, {
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  addVehicle(vehicle: Vehicle) {
    return this.http.post(`${this.baseUrl}add/`, vehicle, {
      headers: {
        "Content-Type": "application/json"
      },
      responseType: 'text'
    })
  }

  deleteVehicle(placa: string) {
    return this.http.delete(`${this.baseUrl}${placa}`)
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}`);
  }
}
